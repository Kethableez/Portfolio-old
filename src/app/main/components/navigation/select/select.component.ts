import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { Language } from 'src/app/core/models/language.model';
import { AppActions, getLanguage } from 'src/app/core/store/app';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  language$ = this.store$.select(getLanguage);

  constructor(
    private store$: Store<RootState>,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(value: Language) {
    const lang = value === 'pl' ? Language.EN : Language.PL;
    this.store$.dispatch(AppActions.setLanguage({ language: lang }));
  }

}
