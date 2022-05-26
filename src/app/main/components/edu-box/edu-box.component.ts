import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/core/models/education.model';
import { BoxDirective } from '../box.directive';

@Component({
  selector: 'ktbz-edu-box',
  templateUrl: './edu-box.component.html',
  styleUrls: ['./edu-box.component.scss']
})
export class EduBoxComponent extends BoxDirective implements OnInit {

  @Input()
  education!: Education;

  constructor() { super(); }

  ngOnInit(): void {
  }



}
