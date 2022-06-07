import { Component, OnInit } from '@angular/core';
import { educations } from 'src/app/core/helpers/education';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations = educations;
  constructor() { }

  ngOnInit(): void {
  }

  get hint() {
    return `display edu [${educations.map(p => p.id).join(' | ')}]`
  }

}
