import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.LANDING;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
