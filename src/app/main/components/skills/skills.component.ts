import { Component, OnInit } from '@angular/core';

const WEB = [
  {
    name: 'angular',
    level: 7,
  },
  {
    name: 'nodejs',
    level: 6,
  },
  {
    name: 'nestjs',
    level: 5,
  },
  {
    name: 'springboot',
    level: 5,
  },
  {
    name: 'mongodb',
    level: 6,
  },
  {
    name: 'mysql',
    level: 4,
  },
  {
    name: 'html',
    level: 7,
  },
  {
    name: 'css',
    level: 7,
  },
  {
    name: 'git',
    level: 7,
  },
  {
    name: 'docker',
    level: 5,
  },
  {
    name: 'adobexd',
    level: 5,
  },
  {
    name: 'figma',
    level: 5,
  },
];

const P_LANG = [
  {
    name: 'typescript',
    level: 7,
  },
  {
    name: 'java',
    level: 6,
  },
  {
    name: 'python',
    level: 5,
  },
  {
    name: 'cpp',
    level: 5,
  },
];

const LANG = [
  {
    name: 'english',
    level: 8,
  },
];

@Component({
  selector: 'ktbz-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  web = WEB;
  programmingLanguages = P_LANG;
  languages = LANG;

  constructor() {}

  ngOnInit(): void {}
}
