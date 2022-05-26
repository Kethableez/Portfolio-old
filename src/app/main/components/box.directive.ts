import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ktbzBox]'
})
export class BoxDirective {
  @Input()
  prefix: string = '';

  constructor() { }

  getLabel(key: string): string {
    return [this.prefix, key].join('.');
  }
}
