import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { openDetailsAnimation } from 'src/app/core/animations/expand-collapse';
import { PageType } from 'src/app/core/models/page-type.model';
import { EducationActions, getEducation, getEducations } from 'src/app/core/store/education';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [openDetailsAnimation]
})
export class EducationComponent extends PageDirective implements OnInit {

  pageType: PageType = PageType.EDUCATION;
  prefix = 'education';

  educations = this.store$.select(getEducations);
  selectedEducation$ = this.store$.select(getEducation).pipe(tap(education => {
    setTimeout(() => {
      this.detailsOpen = education ? true : false;
    }, 100)
  }));


  constructor(
    protected override ref: ElementRef,
    protected override store$: Store<RootState>

  ) {
    super(ref, store$);
    this.store$.dispatch(EducationActions.initEducation());
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  clear() {
    this.detailsOpen = false;
    setTimeout(() => {
      this.store$.dispatch(EducationActions.clearEducation());
    }, 200)
  }
}
