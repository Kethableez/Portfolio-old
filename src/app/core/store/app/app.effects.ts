import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap, tap } from 'rxjs';
import { setLanguage, setTitle } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private translate: TranslateService,
    private title: Title
  ) {

  }

  setLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLanguage),
      switchMap((action) => this.translate.use(action.language))
    ),
    {
      dispatch:false
    }
  )

  setTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setTitle),
      switchMap((action) => {
        const title = `app.title.${action.title}`;
        return this.translate.get(title)
      }),
      tap((title) => this.title.setTitle(title))
    ), {
      dispatch: false
    }
  )
}
