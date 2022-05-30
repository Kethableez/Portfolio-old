import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from 'src/app/core/models/page-type.model';
import { ExperienceActions, getExperience, getExperiences } from 'src/app/core/store/experience';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends PageDirective implements OnInit, AfterContentInit {

  pageType: PageType = PageType.EXPERIENCE;
  prefix = 'experience';
  experiences = this.store$.select(getExperiences);
  selectedExperience = this.store$.select(getExperience);

  constructor(
    private store$: Store<RootState>,
    protected override ref: ElementRef
  ) {
    super(ref);
    this.store$.dispatch(ExperienceActions.initExperience());
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  ngAfterContentInit(): void {
      console.log('visible?')
  }

  clear() {
    this.store$.dispatch(ExperienceActions.clearExperience());
  }
}
