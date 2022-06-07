import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { help } from '../../helpers/help';
import { parseRoute } from '../../helpers/parse-route';
import { routes } from '../../helpers/routes';
import { CommandType } from '../../models/command-type.model';
import { openDisplay } from '../display/display.actions';
import { RootState } from '../root.state';
import {
  cdCommand,
  clearCommand,
  displayCommand,
  helpCommand,
  langCommand,
  lsCommand,
  notFoundCommand,
  runCommand,
  runCommandSuccess,
} from './terminal.actions';

@Injectable()
export class TerminalEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<RootState>,
    private router: Router,
    private translate: TranslateService
  ) {}

  runCommand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(runCommand),
      map(({ command }) => {
        const args = command.split(' ');
        switch (args[0]) {
          case 'display':
            return displayCommand({ objectType: args[1], object: args[2] });

          case 'help':
            return helpCommand({ command: args[1] });

          case 'ls':
            return lsCommand();

          case 'lang':
            return langCommand({ lang: args[1] });

          case 'cd':
            return cdCommand({ directory: args[1] });

          case 'clear':
            return clearCommand();

          default:
            return notFoundCommand({ command: args[0] });
        }
      })
    )
  );

  runDisplay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displayCommand),
      map(({objectType, object }) => {
        return openDisplay({ objectType: objectType, object: object });
      })
    )
  )

  runHelp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(helpCommand),
      map(({ command }) => {
        const content = command
          ? help.filter((h) => h.command === command)
          : help;

        const payload = {
          commandType: CommandType.HELP,
          content: content,
        };
        return runCommandSuccess({ payload: payload });
      })
    )
  );

  runCd$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cdCommand),
      map(({ directory }) => {
        if (directory) {
          const path = parseRoute(directory);
          if (path === 'DIR_NOT_FOUND') {
            const payload = {
              commandType: CommandType.CD,
              content: `${this.translate.instant('command.dir.notfound', {
                directory: directory,
              })}`,
            };
            return runCommandSuccess({ payload: payload });
          }

          this.router.navigateByUrl(`/${path}`);
          return clearCommand();
        }

        const payload = {
          commandType: CommandType.CD,
          content: `~/Portfolio${this.router.url}`,
        };
        return runCommandSuccess({ payload: payload });
      })
    )
  );

  runLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lsCommand),
      map(() => {
        const payload = {
          commandType: CommandType.LS,
          content: routes,
        };
        return runCommandSuccess({ payload: payload });
      })
    )
  );

  runLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(langCommand),
      map(({ lang }) => {
        if (lang) {
          this.translate.use(lang);
        }

        const content = lang ? 'lang.changed' : [this.translate.langs]
        const payload = {
          commandType: CommandType.LANG,
          content: content,
        };
        return runCommandSuccess({ payload: payload });
      })
    )
  )

  runNotFound$ = createEffect(() =>
    this.actions$.pipe(
      ofType(notFoundCommand),
      map(({ command }) => {
        const payload = {
          commandType: CommandType.NOT_FOUND,
          content: command,
        };
        return runCommandSuccess({ payload: payload });
      })
    )
  );

  // runNotFound$ = createEffect(() => this.actions$.pipe(ofType(), map()));
}

