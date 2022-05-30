import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Language } from 'src/app/main/app.component';
import { AppActions } from '../store/app';
import { RootState } from '../store/root.state';

@Injectable()
export class InitService {

  constructor(
    private store$: Store<RootState>
  ) { }

  load() {
    this.store$.dispatch(AppActions.setLanguage({ language: Language.PL}));
    this.store$.dispatch(AppActions.setTheme({ theme: 'light' }));
    this.store$.dispatch(AppActions.setTitle({ title: 'landing'}));
  }
}
