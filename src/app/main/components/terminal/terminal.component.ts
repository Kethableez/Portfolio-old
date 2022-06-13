import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ktbz-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {

  @ViewChild('scrollable') scrollable!: ElementRef;
  scrolltop: number = 0;

  constructor(
  ) { }

  updateScroll() {
    if(this.scrollable) {
      setTimeout(() => { this.scrolltop = this.scrollable.nativeElement.scrollHeight; }, 1)
    }
  }


}
