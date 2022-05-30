import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { DetailsDirective } from '../details.directive';

@Component({
  selector: 'ktbz-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent
  extends DetailsDirective
  implements OnInit
{
  @Input() project!: Project;

  prefix: string = 'project';

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
