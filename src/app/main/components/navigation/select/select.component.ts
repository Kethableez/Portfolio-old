import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Language } from 'src/app/core/models/language.model';
import { AppActions, getLanguage } from 'src/app/core/store/app';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  language$ = this.store$.select(getLanguage);

  constructor(
    private store$: Store<RootState>,
  ) { }

  changeLanguage(value: Language) {
    const language = value === 'pl' ? Language.EN : Language.PL;
    this.store$.dispatch(AppActions.setLanguage({ language }));
  }

}
