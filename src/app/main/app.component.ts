import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from '../core/models/page-type.model';
import { AppActions, getTheme } from '../core/store/app';
import { isOpen } from '../core/store/display';
import { RootState } from '../core/store/root.state';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDisplayOpen$ = this.store$.select(isOpen);

  constructor(private store$: Store<RootState>) {}
}
