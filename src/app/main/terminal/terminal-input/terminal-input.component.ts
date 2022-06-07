import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
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
export class TerminalInputComponent implements OnInit {

  inputType$ = this.store$.select(getInputType);

  steps = [
    'name',
    'email',
    'message',
    'send'
  ]
  currentStep = this.steps[0];


  constructor(
    private builder: FormBuilder,
    private store$: Store<RootState>,
    private ref: ElementRef,
    private contactService: ContactService
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

  ngOnInit(): void {}

  runCommand(e: any) {
    const command: string = this.inputForm.controls['input'].value;
    this.store$.dispatch(TerminalActions.runCommand({ command: command }));

    this.inputForm.controls['input'].setValue('');
    this.ref.nativeElement.scrollTop = this.ref.nativeElement.scrollHeight;
  }

  nextStep(fieldName: string) {
    if(this.contactForm.controls['input'].valid) {
      const index = this.processStep(fieldName);
      this.currentStep = this.steps[index];

      if(this.currentStep === 'send') this.onSend();
    }
  }

  processStep(fieldName: string) {
    const index = this.steps.indexOf(fieldName);
    const value = this.contactForm.controls['input'].value;
    this.contactForm.controls[fieldName].setValue(value);
    this.contactForm.controls['input'].setValue('');
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
      content: 'Message sent!',
    }


    this.contactService.sendForm(formBody).subscribe(
      () => {
        this.store$.dispatch(TerminalActions.runCommandSuccess({ payload: payload}));
        this.store$.dispatch(TerminalActions.changeInputType({ inputType: 'command' }));
        this.contactForm.reset({
          input: '',
          name: '',
          email: '',
          message: '',
        })
      }
    );
  }

  parseLang(val: string) {
    console.log('val', val);
    return val.split(' ')[1];
  }
}
