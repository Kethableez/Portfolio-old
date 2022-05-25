import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.EXPERIENCE;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
