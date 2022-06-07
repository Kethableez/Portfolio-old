import { createAction, props } from '@ngrx/store';
import { Language } from '../../models/language.model';
import { PageType } from '../../models/page-type.model';
import { Theme } from '../../models/theme.model';

export const initApp = createAction('[App] Init App');

export const setLanguage = createAction(
  '[App] Set Language',
  props<{ language: Language }>()
);

export const setTheme = createAction(
  '[App] Set Theme',
  props<{ theme: Theme }>()
);

export const setTitle = createAction(
  '[App] Set Title',
  props<{ title: PageType | string }>()
);
