import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Display from './display.reducers';

export const display = createFeatureSelector<Display.State>(Display.displayKey);

export const getObjectType = createSelector(display, (state) => state.objectType);
export const getObject = createSelector(display, (state) => state.object);
export const isOpen = createSelector(display, (state) => state.isOpen);

