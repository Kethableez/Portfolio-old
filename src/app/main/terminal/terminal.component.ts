import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { RootState } from 'src/app/core/store/root.state';
import { getCommands } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @ViewChild('scrollable') scrollable!: ElementRef;
  scrolltop: number = 0;

  constructor(
    private store$: Store<RootState>
  ) { }

  ngOnInit(): void {

  }

  updateScroll() {
    if(this.scrollable) {
      console.log('is it working?');
      setTimeout(() => { this.scrolltop = this.scrollable.nativeElement.scrollHeight; }, 1)
    }
  }


}
