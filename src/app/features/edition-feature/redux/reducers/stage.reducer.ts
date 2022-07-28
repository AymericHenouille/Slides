import { ActionReducer, createReducer, on } from "@ngrx/store";
import { Layer } from "konva/lib/Layer";
import { Rect } from "konva/lib/shapes/Rect";
import { newRectangle } from "../actions/shapes.actions";
import { deleteLayer, moveLayer, newLayer, updateLayer } from "../actions/stage.actions";

export const stageReducer: ActionReducer<Layer[]> = createReducer<Layer[]>(
  [],
  on(newLayer, (state: Layer[], {config}) =>{
    console.log(config);
    return [...state, new Layer(config)]
  }),
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
  on(newRectangle, (state, {layerIndex, config}) => state.map(layer => {
    console.log(config);
    return layer.clone({}).add(new Rect(config));
  })),
);
