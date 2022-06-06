import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HelpCommand } from 'src/app/core/models/help-command.model';
import { Language } from 'src/app/core/models/language.model';
import { LsCommand } from 'src/app/core/models/ls-command.model';
import { AppActions } from 'src/app/core/store/app';
import { DisplayActions } from 'src/app/core/store/display';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.scss']
})
export class TerminalInputComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private store$: Store<RootState>,
    private ref: ElementRef
  ) { }

  inputForm = this.builder.group({
    input: ['']
  });

  ngOnInit(): void {
  }

  runCommand(e: any) {
    const command: string = this.inputForm.controls['input'].value;
    this.store$.dispatch(TerminalActions.runCommand({ command: `$ ${command}` }));

    if (command.toLowerCase() === 'clear') this.store$.dispatch(TerminalActions.clearTerminal());

    else if (command.startsWith('display')) this.store$.dispatch(DisplayActions.openDisplay({ objectType: command.split(' ')[1], object: { name: command.split(' ')[2] } }));

    else if (command.startsWith('help')) this.store$.dispatch(TerminalActions.runHelp({ commands: this.help }));

    else if (command.startsWith('ls')) this.store$.dispatch(TerminalActions.runLs({ commands: this.ls }));

    else if (command.startsWith('lang')) {
      this.store$.dispatch(AppActions.setLanguage({ language: this.parseLang(command) as Language}));
      this.store$.dispatch(TerminalActions.runCommand({ command: 'Changed language to ' + this.parseLang(command) }));
    }

    else this.store$.dispatch(TerminalActions.runNotFoundCommand({ command: command }));

    this.inputForm.controls['input'].setValue('');
    this.ref.nativeElement.scrollTop = this.ref.nativeElement.scrollHeight;
  }

  parseLang(val: string) {
    console.log('val', val);
    return val.split(' ')[1]
  }

  get help(): HelpCommand[] {
    return [
      {
        command: 'command.help',
        description: 'command.help.description'
      },
      {
        command: 'command.ls',
        description: 'command.ls.description'
      },
      {
        command: 'command.clear',
        description: 'command.clear.description'
      },
      {
        command: 'command.display',
        description: 'command.display.description'
      },
      {
        command: 'command.cd',
        description: 'command.cd.description'
      },
      {
        command: 'command.lang',
        description: 'command.lang.description'
      }
    ]
  }

  get ls(): LsCommand {
    return {
      routes: [
        'route.landing',
        'route.about',
        'route.skills',
        'route.education',
        'route.experience',
        'route.projects',
        'route.contact'
      ]
    }
  }

}
