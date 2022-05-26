import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Experience } from 'src/app/core/models/experience.model';
import { PageType } from 'src/app/core/models/page-type.model';
import { ExperienceActions, getExperience, getExperiences } from 'src/app/core/store/experience';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.EXPERIENCE;
  prefix = 'experience';
  experiences = this.store$.select(getExperiences);
  selectedExperience = this.store$.select(getExperience);

  constructor(
    private store$: Store<RootState>

  ) {
    super();
    this.store$.dispatch(ExperienceActions.initExperience());

  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  clear() {
    this.store$.dispatch(ExperienceActions.clearExperience());
  }
}
