import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayActions, getObject, getObjectType } from 'src/app/core/store/display';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  type$ = this.store$.select(getObjectType);
  object$ = this.store$.select(getObject);

  constructor(
    private store$: Store<RootState>
  ) { }

  close() {
    this.store$.dispatch(DisplayActions.closeDisplay());
  }

}
