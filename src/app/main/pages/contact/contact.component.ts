import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.CONTACT;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initPage(this.pageType);
  }
}
