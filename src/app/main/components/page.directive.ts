import { Directive, Input, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';

const blob1 = {
  blob: 'blob-1',
  style: 'blob up right',
  size: {
    width: 648,
    height: 648,
  },
}

const BLOB2 = {
  blob: 'blob-2',
  style: 'blob down left',
  size: {
    width: 649,
    height: 648,
  }}

@Directive({
  selector: '[appPage]',
})
export class PageDirective {

  background: string = '';
  blobs: any[] = [];

  constructor() {
  }

  setProperties() {

  }

  setBackground(background: string) {
    this.background = background;
  }

  setBlob(name: string, style: string, size: { width: number, height: number }) {
    return {
      blob: name,
      style: style,
      size: size
    }
  }



}
