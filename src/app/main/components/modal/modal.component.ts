import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() header = 'Modal';
  @Input() message: string = 'Hello World';
  @Input() buttons: string[] = ['Ok', 'Cancel'];

  constructor() { }

  ngOnInit(): void {
  }

}
