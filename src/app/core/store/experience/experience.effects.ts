import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { ResourceService, ResourceType } from '../../services/resource.service';
import { RootState } from '../root.state';
import { initExperience, initExperienceSuccess } from './experience.actions';

@Injectable()
export class ExperienceEffects {
  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private resourceService: ResourceService
  ) {}

  initEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initExperience),
      switchMap(() =>
        this.resourceService
          .getResource(ResourceType.EXPERIENCE)
          .pipe(
            map((response) => initExperienceSuccess({ experiences: response }))
          )
      )
    )
  );
}
