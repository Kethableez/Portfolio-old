import { Component } from '@angular/core';
import { educations } from 'src/app/core/helpers/education';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations = educations;
  constructor() { }

  get hint() {
    return `display edu [${educations.map(p => p.id).join(' | ')}]`
  }

}
