import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/models/experience.model';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.EXPERIENCE;
  prefix = 'experience';

  exps: Experience[] = [
    {
      company: 'company.comarch',
      position: 'position.frontend',
      startDate: 'startDate.comarch',
      endDate: 'endDate.comarch',
    },
    {
      company: 'company.fiverr',
      position: 'position.freelance',
      startDate: 'startDate.fiverr',
      endDate: 'endDate.fiverr',
    }
  ]

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
