import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';

@Component({
  selector: 'ktbz-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() prefix: string = '';
  @Input() skill!: Skill;

  constructor() {}

  ngOnInit(): void {}

  get label() {
    return `${this.prefix}.${this.skill.name}`;
  }
}
