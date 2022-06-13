import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {

  @Input() clickedOutside = false;

  constructor(
    private store$: Store<RootState>,
    private ref: ElementRef
  ) { }

    ngOnChanges(changes: SimpleChanges): void {
     if (changes['clickedOutside'].currentValue && this.selectState === 'open') this.changeState();
    }

  selectState: 'open' | 'close' = 'close';

  changeState() {
    this.selectState = this.selectState === 'open' ? 'close' : 'open';
  }

  navigate(directory: string) {
    this.store$.dispatch(TerminalActions.cdCommand({ directory }));
  }
}
