import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/core/helpers/projects';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects = projects;

  ngOnInit(): void {
  }

  get hint() {
    return `display pro [${projects.map(p => p.id).join(' | ')}]`
  }

}
