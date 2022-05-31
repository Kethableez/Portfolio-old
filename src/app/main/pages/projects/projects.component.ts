import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { openDetailsAnimation } from 'src/app/core/animations/expand-collapse';
import { PageType } from 'src/app/core/models/page-type.model';
import {
  getProject,
  getProjects,
  ProjectActions,
} from 'src/app/core/store/projects';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ openDetailsAnimation ]
})
export class ProjectsComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.PROJECTS;
  prefix = 'projects';
  projects = this.store$.select(getProjects);
  selectedProject = this.store$.select(getProject).pipe(tap(education => {
    setTimeout(() => {
      this.detailsOpen = education ? true : false;
    }, 100)
  }));


  constructor(
    protected override ref: ElementRef,
    protected override store$: Store<RootState>
  ) {
    super(ref, store$);
    this.store$.dispatch(ProjectActions.initProject());
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  clear() {
    this.detailsOpen = false;
    setTimeout(() => {
      this.store$.dispatch(ProjectActions.clearProject());
    }, 200)
  }
}
