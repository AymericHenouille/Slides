import { createAction, props } from "@ngrx/store";
import { LayerConfig } from "konva/lib/Layer";

export const newLayer = createAction('[Layer] New Layer', props<{config: LayerConfig}>());
export const deleteLayer = createAction('[Layer] Delete Layer', props<{id: number}>());
export const moveLayer = createAction('[Layer] Move Layer', props<{from: number, to: number}>());
export const updateLayer = createAction('[Layer] Update Layer', props<{config: LayerConfig}>());

export const updateStage = createAction('[Stage] Update Stage');
