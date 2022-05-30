import { createReducer, on } from '@ngrx/store';
import { Language } from 'src/app/main/app.component';
import { setLanguage, setTheme, setTitle } from './app.actions';

export interface State {
  language: string,
  theme: string;
  title: string;
}

export const initialState: State = {
  language: 'pl',
  theme: 'default',
  title: 'KTBZ'
}

export const appKey = 'app';

export const appReducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ ...state, language })),
  on(setTheme, (state, { theme }) => ({ ...state, theme })),
  on(setTitle, (state, { title }) => ({ ...state, title }))
)

export function reducer(state: State | undefined, action: any) {
  return appReducer(state, action);
}
