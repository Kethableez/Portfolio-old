import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeSlide } from 'src/app/core/animations/fade-slide';
import { PageType } from 'src/app/core/models/page-type.model';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [ fadeSlide ]
})
export class LandingComponent extends PageDirective implements OnInit {
  pageType: PageType = PageType.LANDING;
  prefix = 'landing';

  constructor(
    protected override ref: ElementRef,
    protected override store$: Store<RootState>

  ) {
    super(ref, store$);
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }
}
