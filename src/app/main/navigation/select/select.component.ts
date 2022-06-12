import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Language } from 'src/app/core/models/language.model';
import { AppActions, getLanguage } from 'src/app/core/store/app';
import { RootState } from 'src/app/core/store/root.state';

@Component({
  selector: 'ktbz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  language$ = this.store$.select(getLanguage).pipe(
    map(language => this.options.filter(o => o.value === language)[0])
  )

  constructor(
    private store$: Store<RootState>,
    private ref: ElementRef
  ) { }

  selectState: 'open' | 'close' = 'close';

  ngOnInit(): void {
  }

  get options() {
    return [
      {
        label: 'language.en',
        value: Language.EN
      },
      {
        label: 'language.pl',
        value: Language.PL
      }
    ]
  }

  changeState() {
    this.selectState = this.selectState === 'open' ? 'close' : 'open';
  }

  select(value: Language) {
    const option = this.options.find(o => o.value === value);
    if (option) {
      this.store$.dispatch(AppActions.setLanguage({ language: value }));
      this.changeState();
    }
  }

}
