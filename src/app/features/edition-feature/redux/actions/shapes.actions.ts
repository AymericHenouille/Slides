import { createAction, props } from "@ngrx/store";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { RectConfig } from "konva/lib/shapes/Rect";
import { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";

export const newRectangle = createAction('[Shapes] New Rectangle', props<{config: RectConfig, layerIndex: number}>());
export const newCircle = createAction('[Shapes] New Circle', props<{config: CircleConfig, layerIndex: number}>());
export const newTriangle = createAction('[Shapes] New Triangle', props<{config: RegularPolygonConfig, layerIndex: number}>());
