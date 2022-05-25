import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/core/models/education.model';

@Component({
  selector: 'ktbz-edu-box',
  templateUrl: './edu-box.component.html',
  styleUrls: ['./edu-box.component.scss']
})
export class EduBoxComponent implements OnInit {

  @Input()
  education!: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
