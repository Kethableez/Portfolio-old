import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { concatMap } from 'rxjs';
import { DisplayActions, getObject, getObjectType } from 'src/app/core/store/display';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  type$ = this.store$.select(getObjectType);
  object$ = this.store$.select(getObject);

  constructor(
    private store$: Store<RootState>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.store$.dispatch(DisplayActions.closeDisplay());
  }

}
