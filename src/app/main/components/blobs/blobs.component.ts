import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-blobs',
  templateUrl: './blobs.component.html',
  styleUrls: ['./blobs.component.scss'],
})
export class BlobsComponent implements OnInit {
  @Input()
  blobs: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
