import { createReducer, on } from '@ngrx/store';
import { Language } from '../../models/language.model';
import { PageType } from '../../models/page-type.model';
import { Theme } from '../../models/theme.model';
import { disableInfoModal, setLanguage, setTheme, setTitle } from './app.actions';

export interface State {
  language: Language;
  theme: Theme;
  title: PageType | string;
  infoModal: boolean;
}

export const initialState: State = {
  language: Language.PL,
  theme: Theme.DARK,
  title: PageType.LANDING,
  infoModal: true
};

export const appKey = 'app';

export const appReducer = createReducer(
  initialState,
  on(setLanguage, (state, { language }) => ({ ...state, language })),
  on(setTheme, (state, { theme }) => ({ ...state, theme })),
  on(setTitle, (state, { title }) => ({ ...state, title })),
  on(disableInfoModal, (state) => ({ ...state, infoModal: false }))
);

export function reducer(state: State | undefined, action: any) {
  return appReducer(state, action);
}
