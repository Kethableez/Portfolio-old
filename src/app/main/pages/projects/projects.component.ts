import { Component } from '@angular/core';
import { projects } from 'src/app/core/helpers/projects';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  projects = projects;

  get hint() {
    return `display pro [${projects.map(p => p.id).join(' | ')}]`
  }

}
