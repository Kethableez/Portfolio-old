import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends PageDirective implements OnInit {

  pageType: PageType = PageType.ABOUT;
  prefix = 'about';

  constructor(
    protected override ref: ElementRef
  ) {
    super(ref);
  }

  ngOnInit(): void {
    this.initPage(this.pageType);
  }

}
