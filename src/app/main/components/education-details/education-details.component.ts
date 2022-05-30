import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/core/models/education.model';
import { DetailsDirective } from '../details.directive';

@Component({
  selector: 'ktbz-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss'],
})
export class EducationDetailsComponent
  extends DetailsDirective
  implements OnInit
{
  @Input()
  education!: Education;

  prefix: string = 'education';

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
