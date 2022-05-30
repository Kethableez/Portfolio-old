import { Component, ElementRef, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.LANDING;
  prefix = 'landing';

  constructor(
    protected override ref: ElementRef
  ) {
    super(ref);
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
