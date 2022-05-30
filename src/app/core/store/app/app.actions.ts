import { createAction, props } from '@ngrx/store';
import { Language } from 'src/app/main/app.component';

export const setLanguage = createAction('[App] Set Language', props<{ language: Language }>());

export const setTheme = createAction('[App] Set Theme', props<{ theme: string }>());

export const setTitle = createAction('[App] Set Title', props<{ title: string }>());
