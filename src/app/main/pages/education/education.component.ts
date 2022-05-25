import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.EDUCATION;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
