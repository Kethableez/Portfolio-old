import {
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Modal } from '../core/models/modal.model';
import { isOpen } from '../core/store/display';
import { RootState } from '../core/store/root.state';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDisplayOpen$ = this.store$.select(isOpen);
  isModalOpen = true;
  infoModal: Modal = {
    type: 'info',
    header: 'modal.info',
    message: 'modal.message',
    buttons: ['modal.ok'],
  }

  closeModal() {
    this.isModalOpen = false;
  }
  constructor(private store$: Store<RootState>) {}
}
