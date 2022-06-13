import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PageType } from '../../models/page-type.model';
import * as App from './app.reducers';

export const app = createFeatureSelector<App.State>(App.appKey);

export const getLanguage = createSelector(
  app,
  (state: App.State) => state.language
);
export const getTheme = createSelector(app, (state: App.State) => state.theme);
export const getTitle = createSelector(app, (state: App.State) => state.title);
export const isPageVisible = (page: PageType) => createSelector(
  getTitle,
  (title) => title === page
);

export const isModalEnabled = createSelector(app, (state: App.State) => state.infoModal);
