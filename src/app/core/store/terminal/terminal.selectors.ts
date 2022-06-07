import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Terminal from './terminal.reducers';

export const terminal = createFeatureSelector<Terminal.State>(Terminal.terminalKey);

export const getCommands = createSelector(terminal, (state) => state.commands);

export const getInputType = createSelector(terminal, (state) => state.inputType);
