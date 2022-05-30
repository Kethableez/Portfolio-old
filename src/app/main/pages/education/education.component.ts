import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from 'src/app/core/models/page-type.model';
import { EducationActions, getEducation, getEducations } from 'src/app/core/store/education';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent extends PageDirective implements OnInit {

  pageType: PageType = PageType.EDUCATION;
  prefix = 'education';
  educations = this.store$.select(getEducations);
  selectedEducation = this.store$.select(getEducation);

  constructor(
    private store$: Store<RootState>,
    protected override ref: ElementRef
  ) {
    super(ref);
    this.store$.dispatch(EducationActions.initEducation());
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  clear() {
    this.store$.dispatch(EducationActions.clearEducation());
  }
}
