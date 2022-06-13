import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { projects } from 'src/app/core/helpers/projects';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(
    private store$: Store<RootState>
  ) { }

  projects = projects;

  get hint() {
    return `display pro [${projects.map(p => p.id).join(' | ')}]`
  }

  openDisplay(id: string) {
    this.store$.dispatch(TerminalActions.displayCommand({ objectType: 'pro', id }))
  }

}
