import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal } from 'src/app/core/models/modal.model';

@Component({
  selector: 'ktbz-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() modal!: Modal;
  @Output() closeModal = new EventEmitter<void>();
  constructor() { }

  onClose() {
    this.closeModal.emit();
  }
}
