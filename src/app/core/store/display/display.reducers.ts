import { createReducer, on } from '@ngrx/store';
import { closeDisplay, openDisplay } from './display.actions';

export interface State {
  object: any | null;
  objectType: string | null;
  isOpen: boolean
}

export const initialState: State = {
  object: null,
  objectType: null,
  isOpen: false
}

export const displayKey = 'display';

export const displayReducer = createReducer(
  initialState,
  on(openDisplay, (state, { objectType, object}) => ({
    ...state,
    isOpen: true,
    objectType: objectType,
    object: object
  })),
  on(closeDisplay, () => ({
    ...initialState
  }))
)

export function reducer(state: State | undefined, action: any) {
  return displayReducer(state, action);
}
