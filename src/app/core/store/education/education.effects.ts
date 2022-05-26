import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { ResourceService, ResourceType } from '../../services/resource.service';
import { RootState } from '../root.state';
import { initEducation, initEducationSuccess } from './education.actions';

@Injectable()
export class EducationEffects {
  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private resourceService: ResourceService
  ) {}

  initEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEducation),
      switchMap(() =>
        this.resourceService
          .getResource(ResourceType.EDUCATION)
          .pipe(
            map((response) => initEducationSuccess({ educations: response }))
          )
      )
    )
  );
}
