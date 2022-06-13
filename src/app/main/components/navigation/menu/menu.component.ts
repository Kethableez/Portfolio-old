import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() closeMenu = new EventEmitter<void>();

  constructor(
    private store$: Store<RootState>,
    private ref: ElementRef
  ) { }

  selectState: 'open' | 'close' = 'close';

  changeState() {
    this.selectState = this.selectState === 'open' ? 'close' : 'open';
    // if(this.selectState === 'open') setTimeout(() => this.changeState(), 2000);
  }

  navigate(page: string) {
    this.store$.dispatch(TerminalActions.cdCommand({ directory: page }));
  }
}
