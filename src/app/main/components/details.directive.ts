import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ktbzDetails]',
})
export abstract class DetailsDirective {
  abstract prefix: string;

  @Output() clear = new EventEmitter<void>();

  constructor() {}

  doClear() {
    console.log('clicked');
    this.clear.emit();
  }

  getLabel(label: string) {
    return `${this.prefix}.${label}`;
  }
}
