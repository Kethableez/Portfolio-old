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

  edus: Education[] = [
    {
      field: 'field.mechatronics',
      title: 'title.technician',
      school: 'school.highschool',
      startDate: 'startDate.highschool',
      endDate: 'endDate.highschool',
      achievements: [
        'achievement.highschool.1',
        'achievement.highschool.2',
        'achievement.highschool.3',
      ]
    },
    {
      field: 'field.controlengineering',
      title: 'title.engineer',
      school: 'school.university1',
      startDate: 'startDate.university1',
      endDate: 'endDate.university1',
      achievements: [
        'achievement.university1.1',
        'achievement.university1.2',
        'achievement.university1.3',
      ]
    },
    {
      field: 'field.computerscience',
      title: 'title.master',
      school: 'school.university2',
      startDate: 'startDate.university2',
      endDate: 'endDate.university2',
      achievements: [
        'achievement.university2.1',
        'achievement.university2.2',
        'achievement.university2.3',
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
