import { ActionReducer, createReducer, on } from "@ngrx/store";
import { Layer } from "konva/lib/Layer";
import { Shape } from "konva/lib/Shape";
import { Circle } from "konva/lib/shapes/Circle";
import { Rect } from "konva/lib/shapes/Rect";
import { RegularPolygon } from "konva/lib/shapes/RegularPolygon";
import { newCircle, newRectangle, newTriangle } from "../actions/shapes.actions";
import { deleteLayer, moveLayer, newLayer, updateLayer } from "../actions/stage.actions";

export const stageReducer: ActionReducer<Layer[]> = createReducer<Layer[]>(
  [],
  on(newLayer, (state: Layer[], {config}) => [...state, new Layer(config)]),
  on(deleteLayer, (state, {id}) => state.map(layer => {
    +layer.id() === id && state.splice(state.indexOf(layer.destroy()), 1);
    +layer.id() > id && layer.id(+layer.id() - 1 + '');
    return layer;
  })),
  on(moveLayer, (state, {from, to}) => {
    state.map(layer => {
      if (+layer.id() === from) {
        layer.id(to + '');
      } else if (+layer.id() <= to && +layer.id() >= from) {
        layer.id(+layer.id() - 1 + '');
      }
    });
    return state.sort((a, b) => +a.id() - +b.id());
  }),
  on(updateLayer, (state, {config}) => state.map(layer => layer.id() === config.id ? new Layer(config).clone(layer) : layer)),
  on(newRectangle, (state, {layerIndex, config}) => state.map(layer => +layer.id() === layerIndex ? addObjectToLayer(layer, new Rect(config)) : layer)),
  on(newCircle, (state, {layerIndex, config}) => state.map(layer => +layer.id() === layerIndex ? addObjectToLayer(layer, new Circle(config)) : layer)),
  on(newTriangle, (state, {layerIndex, config}) => state.map(layer => +layer.id() === layerIndex ? addObjectToLayer(layer, new RegularPolygon(config)) : layer)),
);


function addObjectToLayer(layer: Layer, shape: Shape): Layer {
  const clone: Layer = layer.clone().add(shape);
  layer.destroy();
  return clone;
}
