import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from 'src/app/core/models/page-type.model';
import { getProject, getProjects, ProjectActions } from 'src/app/core/store/projects';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.PROJECTS;
  prefix = 'projects';
  projects = this.store$.select(getProjects);
  selectedProject = this.store$.select(getProject);

  constructor(
    private store$: Store<RootState>

  ) {
    super();
    this.store$.dispatch(ProjectActions.initProject());
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  clear() {
    this.store$.dispatch(ProjectActions.clearProject());
  }
}
