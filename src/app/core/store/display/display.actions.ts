import { createAction, props } from '@ngrx/store';

export const openDisplay = createAction(
  '[Display] Open Display',
  props<{ objectType: any, object: any }>()
);

export const closeDisplay = createAction(
  '[Display] Close Display'
)
