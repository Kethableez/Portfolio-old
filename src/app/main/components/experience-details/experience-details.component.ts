import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/models/experience.model';
import { DetailsDirective } from '../details.directive';

@Component({
  selector: 'ktbz-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
})
export class ExperienceDetailsComponent
  extends DetailsDirective
  implements OnInit
{
  @Input() experience!: Experience;

  prefix: string = 'experience';
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
