import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.ABOUT;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initPage(this.pageType);
  }
}
