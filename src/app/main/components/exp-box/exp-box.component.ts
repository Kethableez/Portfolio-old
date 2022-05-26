import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/models/experience.model';
import { BoxDirective } from '../box.directive';

@Component({
  selector: 'ktbz-exp-box',
  templateUrl: './exp-box.component.html',
  styleUrls: ['./exp-box.component.scss']
})
export class ExpBoxComponent extends BoxDirective implements OnInit {

  @Input()
  experience!: Experience;

  constructor() { super(); }

  ngOnInit(): void {
  }

}
