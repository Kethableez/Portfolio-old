import { Component } from '@angular/core';
import { skills } from 'src/app/core/helpers/skills';

@Component({
  selector: 'ktbz-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = skills;

  constructor() { }

}
