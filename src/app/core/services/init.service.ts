import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../store/app';
import { RootState } from '../store/root.state';

@Injectable()
export class InitService {
  constructor(private store$: Store<RootState>) {}

  load() {
    this.store$.dispatch(AppActions.initApp());
  }
}
