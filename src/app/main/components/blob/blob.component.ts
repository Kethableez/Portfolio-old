import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss'],
})
export class BlobComponent implements OnInit {
  constructor() {}

  @Input() icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {}
}
