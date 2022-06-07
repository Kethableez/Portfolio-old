import { Component, OnInit } from '@angular/core';
import { experiences } from 'src/app/core/helpers/experience';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experiences = experiences;

  ngOnInit(): void {
  }
  get hint() {
    return `display exp [${experiences.map(p => p.id).join(' | ')}]`
  }


}
