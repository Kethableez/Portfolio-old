import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';
import { ContactService } from './contact.service';

@Component({
  selector: 'ktbz-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.CONTACT;
  prefix = 'contact';

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService,
      protected override ref: ElementRef
    ) {
      super(ref);
    }

  contactForm = this.builder.group({
    name: ['', Validators.required],
    _replyto: ['', Validators.required],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
    this.initPage(this.pageType);
  }

  submit() {
    const payload = this.contactForm.value;
    this.contactService.sendForm(payload).subscribe();
  }
}
