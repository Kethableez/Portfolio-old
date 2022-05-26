import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { Project } from '../../models/project.model';
import { ResourceService, ResourceType } from '../../services/resource.service';
import { RootState } from '../root.state';
import { initProject, initProjectSuccess } from './project.actions';

@Injectable()
export class ProjectEffects {
  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private resourceService: ResourceService
  ) {}

  initProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProject),
      switchMap(() =>
        this.resourceService
          .getResource(ResourceType.PROJECTS)
          .pipe(
            map((response) => initProjectSuccess({ projects: response }))
          )
      )
    )
  );
}
