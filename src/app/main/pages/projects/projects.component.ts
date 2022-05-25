import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.PROJECTS;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
