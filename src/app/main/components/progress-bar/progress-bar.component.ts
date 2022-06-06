import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() value: number = 0;
  @Input() max: number = 10;
  @Input() displayValue: boolean = false;
  @Input() displayType: string = 'percent';

  constructor() { }

  ngOnInit(): void {
  }

  get progressBar() {
    return {
      filled: Array(this.value).fill('=').join(''),
      notFilled: Array(this.max - this.value).fill('-').join(''),
      value: this.progressValue
    }
  }

  get progressValue() {
    if (this.displayValue) {
      if (this.displayType === 'percent') {
        return this.percent;
      }
      return this.score;
    }
    return null;
  }

  get percent() {
    const p = Math.floor((this.value / this.max) * 100);
    return `${p} %`;
  }

  get score() {
    return `${this.value}/${this.max}`;
  }

}
