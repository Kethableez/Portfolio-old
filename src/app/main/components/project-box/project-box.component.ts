import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/core/models/project.model';
import { ProjectActions } from 'src/app/core/store/projects';
import { RootState } from 'src/app/core/store/root.state';
import { BoxDirective } from '../box.directive';

@Component({
  selector: 'ktbz-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss']
})
export class ProjectBoxComponent extends BoxDirective implements OnInit {

  @Input()
  project!: Project;

  @Input()
  isDetailed: boolean = false;

  constructor(
    private store$: Store<RootState>

  ) { super();}

  ngOnInit(): void {
  }

  getUrl(url: string) {
    return ['https://github.com/Kethableez', url].join('/');
  }

  select(): void {
    this.store$.dispatch(ProjectActions.selectProject({ project: this.project }));
  }

  redirect(url: string) {
    window.open(this.getUrl(url), '_blank');
  }

}
