import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { experiences } from 'src/app/core/helpers/experience';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor(
    private store$: Store<RootState>
  ) { }

  experiences = experiences;

  get hint() {
    return `display exp [${experiences.map(p => p.id).join(' | ')}]`
  }

  openDisplay(id: string) {
    this.store$.dispatch(TerminalActions.displayCommand({ objectType: 'exp', id }))
  }

}
