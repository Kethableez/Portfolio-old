import {
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Modal } from '../core/models/modal.model';
import { AppActions, isModalEnabled } from '../core/store/app';
import { isOpen } from '../core/store/display';
import { RootState } from '../core/store/root.state';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDisplayOpen$ = this.store$.select(isOpen);
  isModalOpen$ = this.store$.select(isModalEnabled);

  infoModal: Modal = {
    type: 'info',
    header: 'modal.info',
    message: 'modal.message',
    buttons: ['modal.ok'],
  }

  constructor(private store$: Store<RootState>) {}

  closeModal() {
    this.store$.dispatch(AppActions.disableInfoModal());
  }
}
