import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { steps } from 'src/app/core/helpers/steps';
import { CommandType } from 'src/app/core/models/command-type.model';
import { Command } from 'src/app/core/models/command.model';
import { ContactService } from 'src/app/core/services/contact.service';
import { RootState } from 'src/app/core/store/root.state';
import { getInputType, TerminalActions } from 'src/app/core/store/terminal';

@Component({
  selector: 'ktbz-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.scss'],
})
export class TerminalInputComponent {
  inputType$ = this.store$.select(getInputType).pipe(
    tap((inputType) => {
      this.formEnabled = inputType === 'message';
    }));

  @HostListener('window:keydown.Control.c', ['$event'])
  onKeyDown() {
    if(this.formEnabled) {
      this.store$.dispatch(
        TerminalActions.runCommandSuccess({
          payload: {
            commandType: CommandType.DEFAULT,
            content: '^C',
          },
        })
      );
      this.discard();
    }
  }

  steps = steps;
  currentStep = this.steps[0];
  formEnabled = false;


  constructor(
    private builder: FormBuilder,
    private store$: Store<RootState>,
    private ref: ElementRef,
    private contactService: ContactService,
    private translate: TranslateService
  ) {}

  inputForm = this.builder.group({
    input: [''],
  });

  contactForm = this.builder.group({
    input: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  runCommand() {
    const command: string = this.inputForm.controls['input'].value;
    this.store$.dispatch(TerminalActions.runCommand({ command }));

    this.inputForm.controls['input'].setValue('');
    this.ref.nativeElement.scrollTop = this.ref.nativeElement.scrollHeight;
  }

  nextStep(fieldName: string) {
    if (this.contactForm.controls['input'].valid) {
      const value = this.contactForm.controls['input'].value;
      if (value.toLowerCase() === 'q') this.discard();

      else if (this.currentStep.name !== 'send') {
        const index = this.processStep(fieldName, value);
        this.currentStep = this.steps[index];
      } else {
        if (this.checkExitCondition(value)) this.onSend();
        else this.discard();
        this.currentStep = this.steps[0];
      }
    }
  }

  reset() {
    this.contactForm.reset({
      input: '',
      name: '',
      email: '',
      message: '',
    });
  }

  checkExitCondition(value: string) {
    return value.toLowerCase() === 'y' || value.toLowerCase() === 'yes' || value.toLowerCase() === 'tak' || value.toLowerCase() === 't';
  }

  processStep(fieldName: string, value: string) {
    const index = this.steps.findIndex((step) => step.name === fieldName);
    this.contactForm.controls[fieldName].setValue(value);
    this.contactForm.controls['input'].setValue('');
    const payload = {
      commandType: CommandType.MSG_INPUT,
      content: {
        fieldName: this.steps.find((step) => step.name === fieldName)?.label,
        value: value,
      }
    };
    this.store$.dispatch(TerminalActions.runCommandSuccess({ payload }));
    return index + 1;
  }

  onSend() {
    const formBody = {
      name: this.contactForm.controls['name'].value,
      _replyto: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value,
    };

    const payload: Command = {
      commandType: CommandType.DEFAULT,
      content:  'message.sent'
    };

    this.contactService.sendForm(formBody).subscribe(() => {
      this.store$.dispatch(
        TerminalActions.runCommandSuccess({ payload })
      );
      this.store$.dispatch(
        TerminalActions.changeInputType({ inputType: 'command' })
      );
      this.reset();
    });
  }

  private discard() {
    this.reset();
    this.store$.dispatch(
      TerminalActions.runCommandSuccess({
        payload: {
          commandType: CommandType.DEFAULT,
          content: 'message.notsent'
        },
      })
    );
    this.store$.dispatch(
      TerminalActions.changeInputType({ inputType: 'command' })
    );
  }

  parseLang(val: string) {
    return val.split(' ')[1];
  }
}
