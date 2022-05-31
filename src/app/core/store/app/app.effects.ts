import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { concatMap, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { Language } from '../../models/language.model';
import { PageType } from '../../models/page-type.model';
import { Theme } from '../../models/theme.model';
import { RootState } from '../root.state';
import { initApp, setLanguage, setTheme, setTitle } from './app.actions';
import { getTitle } from './app.selectors';

@Injectable()
export class AppEffects {
  constructor(
    private store$: Store<RootState>,
    private actions$: Actions,
    private translate: TranslateService,
    private title: Title
  ) {}

  initApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initApp),
      concatMap(() => [
        setTitle({ title: PageType.LANDING}),
        setLanguage({ language: Language.PL }),
        setTheme({ theme: Theme.DARK }),
      ])
    )
  );

  setLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLanguage),
      switchMap((action) => this.translate.use(action.language)),
      withLatestFrom(this.store$.select(getTitle)),
      map(([, title]) => setTitle({ title: title }))
    )
  );

  setTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setTitle),
        switchMap((action) => {
          const title = `app.title.${action.title}`;
          console.log(this.translate.currentLang);
          return this.translate.get(title);
        }),
        tap((title) => this.title.setTitle(title))
      ),
    {
      dispatch: false,
    }
  );
}
