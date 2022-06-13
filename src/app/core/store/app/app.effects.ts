import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { concatMap, map, switchMap, tap } from 'rxjs';
import { Language } from '../../models/language.model';
import { Theme } from '../../models/theme.model';
import { RootState } from '../root.state';
import { initApp, setLanguage, setTheme, setTitle } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private translate: TranslateService,
    private title: Title,
    private router: Router
  ) {}

  initApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initApp),
      concatMap(({language}) => [
        setLanguage({ language: language }),
        setTheme({ theme: Theme.DARK }),
      ]),
      tap(() => this.translate.addLangs([Language.PL, Language.EN]))
    )
  );

  setLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLanguage),
      switchMap((action) => this.translate.use(action.language)),
      map(() => setTitle({ title: this.router.url }))
    )
  );

  setTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setTitle),
        switchMap((action) => {
          const title = `~/Portfolio${action.title}`;
          return this.translate.get(title);
        }),
        tap((title) => this.title.setTitle(title))
      ),
    {
      dispatch: false,
    }
  );
}
