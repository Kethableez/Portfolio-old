import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { educations } from 'src/app/core/helpers/education';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations = educations;
  constructor(
    private store$: Store<RootState>
  ) { }

  get hint() {
    return `display edu [${educations.map(p => p.id).join(' | ')}]`
  }

  openDisplay(id: string) {
    this.store$.dispatch(TerminalActions.displayCommand({ objectType: 'edu', id }))
  }

}
