import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { DisplayActions, getObject, getObjectType } from 'src/app/core/store/display';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  displayObject$ = combineLatest([
    this.store$.select(getObjectType),
    this.store$.select(getObject)
  ], (type, object) => ({ type, object }));

  constructor(
    private store$: Store<RootState>
  ) { }

  close() {
    this.store$.dispatch(DisplayActions.closeDisplay());
  }

}
