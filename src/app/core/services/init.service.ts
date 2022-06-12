import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Language } from '../models/language.model';
import { AppActions } from '../store/app';
import { RootState } from '../store/root.state';

@Injectable()
export class InitService {
  constructor(private store$: Store<RootState>) {}

  load() {
    const lang = navigator.language === 'pl-PL' ? Language.PL : Language.EN;
    this.store$.dispatch(AppActions.initApp({ language: lang}));
  }
}
