import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Experience } from 'src/app/core/models/experience.model';
import { ExperienceActions } from 'src/app/core/store/experience';
import { RootState } from 'src/app/core/store/root.state';
import { BoxDirective } from '../box.directive';

@Component({
  selector: 'ktbz-exp-box',
  templateUrl: './exp-box.component.html',
  styleUrls: ['./exp-box.component.scss']
})
export class ExpBoxComponent extends BoxDirective implements OnInit {

  @Input()
  experience!: Experience;

  constructor(
    private store$: Store<RootState>

  ) { super(); }

  ngOnInit(): void {
  }

  select(): void {
    this.store$.dispatch(ExperienceActions.selectExperience({ experience: this.experience }));
  }

}
