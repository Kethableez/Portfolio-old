import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { saveAs } from 'file-saver';
import { concatMap, map } from 'rxjs';
import { educations } from '../../helpers/education';
import { experiences } from '../../helpers/experience';
import { help } from '../../helpers/help';
import { parseRoute } from '../../helpers/parse-route';
import { projects } from '../../helpers/projects';
import { routes } from '../../helpers/routes';
import { CommandType } from '../../models/command-type.model';
import { ContactService } from '../../services/contact.service';
import { setTitle } from '../app/app.actions';
import { openDisplay } from '../display/display.actions';
import { RootState } from '../root.state';
import {
  cdCommand,
  changeInputType,
  clearCommand,
  displayCommand,
  helpCommand,
  langCommand,
  lsCommand,
  msgCommand,
  notFoundCommand,
  runCommand,
  runCommandSuccess,
  wgetCommand
} from './terminal.actions';

const DATA: {[key: string]: any} = {
  'exp': experiences,
  'pro': projects,
  'edu': educations
}

@Injectable()
export class TerminalEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<RootState>,
    private router: Router,
    private translate: TranslateService,
    private contactService: ContactService,
  ) {}

  runCommand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(runCommand),
      map(({ command }) => {
        const args = command.split(' ').map(arg => arg.toLowerCase())
        switch (args[0]) {
          case 'display':
            return displayCommand({ objectType: args[1], id: args[2] });

          case 'help':
            return helpCommand({ command: args[1] });

          case 'msg':
            return msgCommand();

          case 'ls':
            return lsCommand();

          case 'lang':
            return langCommand({ lang: args[1] });

          case 'cd':
            return cdCommand({ directory: args[1] });

          case 'clear':
            return clearCommand();

          case 'wget':
            return wgetCommand({ filename: args[1], lang: args[2] });

          default:
            return notFoundCommand({ command: args[0] });
        }
      })
    )
  );

  msgCommand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(msgCommand),
      concatMap(() => [
        changeInputType({ inputType: 'message' }),
        runCommandSuccess({payload: { commandType: CommandType.DEFAULT,
          content: 'message.run'}})
      ]
    )
  ));

  wgetCommand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(wgetCommand),
      map(({filename, lang}) => {
        if( filename !== 'cv') {
          const content = filename ? { label: 'command.file.notfound', value: filename } : { label: 'command.file.empty'};

          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: content
          };
          return runCommandSuccess({ payload });
        }
        const language = lang ? lang : this.translate.currentLang;
        this.contactService.downloadCV(language).subscribe(cvFile => saveAs(cvFile, 'cv.pdf'));
          const payload = {
            commandType: CommandType.DEFAULT,
            content: 'download.started'
          };
          return runCommandSuccess({ payload });
        }
      )
    )
  );

  runDisplay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displayCommand),
      map(({ objectType, id }) => {
        if (!objectType) {
          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: { label: 'command.type.empty' }
          }
          return runCommandSuccess({ payload });
        }

        if (!['edu', 'exp', 'pro'].includes(objectType)) {
          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: { label: 'command.type.notfound', value: objectType }
          }
          return runCommandSuccess({ payload });
        }

        if (!id) {
          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: { label: 'command.object.empty' }
          }
          return runCommandSuccess({ payload });
        }

        const object = DATA[objectType].find((obj: any) => obj.id === id);

        if (!object) {
          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: { label: 'command.object.notfound', value: id }
          }
          return runCommandSuccess({ payload });
        }

        return openDisplay({ objectType, object });
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

        if(content.length === 0) {
          const payload = {
            commandType: CommandType.NOT_FOUND,
            content: {
              label: 'command.notfound',
              value: command
            }
          };
          return runCommandSuccess({ payload });
        }

        const payload = {
          commandType: CommandType.HELP,
          content: content,
        };
        return runCommandSuccess({ payload });
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
              commandType: CommandType.NOT_FOUND,
              content: {
                label: 'command.dir.notfound',
                value: directory
              }
            };
            return runCommandSuccess({ payload });
          }

          this.router.navigateByUrl(`/${path}`);
          this.store$.dispatch(setTitle({ title: `/${path}` }));
          return clearCommand();
        }

        const payload = {
          commandType: CommandType.CD,
          content: `~/Portfolio${this.router.url}`,
        };
        return runCommandSuccess({ payload });
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
        return runCommandSuccess({ payload });
      })
    )
  );

  runLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(langCommand),
      map(({ lang }) => {
        if (lang) {
          this.translate.use(lang);
          const payload = {
            commandType: CommandType.DEFAULT,
            content: 'lang.changed',
          };
          return runCommandSuccess({ payload });
        }
        const payload = {
          commandType: CommandType.LANG,
          content: [...this.translate.langs].map(lang => {
            return {
              label: lang,
            value: `language.long.${lang}`
            }
          }),
        };
        return runCommandSuccess({ payload });
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
        return runCommandSuccess({ payload });
      })
    )
  );

  // runNotFound$ = createEffect(() => this.actions$.pipe(ofType(), map()));
}

