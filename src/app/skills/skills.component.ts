import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills = [
    {
      name: "Angular",
      level: 10
    },
    {
      name: "TypeScript",
      level: 10
    },
    {
      name: "Java",
      level: 3
    }
  ]

  ngOnInit(): void {
  }

}
