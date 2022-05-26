import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/core/models/education.model';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.EDUCATION;
  prefix = 'education';

  edus: Education[] = [
    {
      field: 'field.technician',
      title: 'title.technician',
      school: 'school.highschool',
      startDate: 'startDate.technician',
      endDate: 'endDate.technician',
      achievements: [
        'achievement.technician.1',
        'achievement.technician.2',
        'achievement.technician.3',
      ]
    },
    {
      field: 'field.engineer',
      title: 'title.engineer',
      school: 'school.university',
      startDate: 'startDate.engineer',
      endDate: 'endDate.engineer',
      achievements: [
        'achievement.engineer.1',
        'achievement.engineer.2',
        'achievement.engineer.3',
      ]
    },
    {
      field: 'field.master',
      title: 'title.master',
      school: 'school.university',
      startDate: 'startDate.master',
      endDate: 'endDate.master',
      achievements: [
        'achievement.master.1',
        'achievement.master.2',
        'achievement.master.3',
      ]
    }
  ]

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
