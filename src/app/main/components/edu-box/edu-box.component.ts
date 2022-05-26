import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Education } from 'src/app/core/models/education.model';
import { EducationActions, getEducation } from 'src/app/core/store/education';
import { RootState } from 'src/app/core/store/root.state';
import { BoxDirective } from '../box.directive';

@Component({
  selector: 'ktbz-edu-box',
  templateUrl: './edu-box.component.html',
  styleUrls: ['./edu-box.component.scss']
})
export class EduBoxComponent extends BoxDirective implements OnInit {

  @Input()
  education!: Education;

  constructor(
    private store$: Store<RootState>
  ) { super(); }

  ngOnInit(): void {
  }

  select(): void {
    this.store$.dispatch(EducationActions.selectEducation({ education: this.education }));
  }


}
