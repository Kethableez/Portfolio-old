import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ktbz-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() value: number = 0;
  @Input() max: number = 10;
  @Input() displayValue: boolean = false;
  @Input() displayType: string = 'percent';

  constructor(
    private ref: ElementRef
  ) { }

  private progressWidth!: number;
  private charCount!: number;
  private charFilled!: number;
  private charUnfliied!: number;

  ngOnInit(): void {
    this.progressWidth = this.ref.nativeElement.offsetWidth;
    this.charCount = Math.floor(( this.progressWidth) / 10);
    this.charFilled = Math.floor(this.charCount * this.value / this.max);
    this.charUnfliied = this.charCount - this.charFilled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.charFilled = Math.floor(this.charCount * this.value / this.max);
      this.charUnfliied = this.charCount - this.charFilled;
    }
  }

  get progressBar() {
    return {
      filled: Array(this.charFilled).fill('=').join(''),
      notFilled: Array(this.charUnfliied).fill('-').join(''),
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
