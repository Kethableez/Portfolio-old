import { Component } from '@angular/core';
import { experiences } from 'src/app/core/helpers/experience';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor() { }

  experiences = experiences;

  get hint() {
    return `display exp [${experiences.map(p => p.id).join(' | ')}]`
  }


}
