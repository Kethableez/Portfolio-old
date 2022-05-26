import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
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

  constructor() { super();}

  ngOnInit(): void {
  }

  getUrl(url: string) {
    return ['https://github.com/Kethableez', url].join('/');
  }

  redirect(url: string) {
    window.open(this.getUrl(url), '_blank');
  }

}
