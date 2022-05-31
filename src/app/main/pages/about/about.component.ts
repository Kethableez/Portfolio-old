import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from 'src/app/core/models/page-type.model';
import { RootState } from 'src/app/core/store/root.state';
import { PageDirective } from '../../components/page.directive';

@Component({
  selector: 'ktbz-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends PageDirective implements OnInit {

  pageType: PageType = PageType.ABOUT;
  prefix = 'about';

  isVisible$ = this.store$.dispatch

  constructor(
    protected override ref: ElementRef,
    protected override store$: Store<RootState>

  ) {
    super(ref, store$);
  }

  ngOnInit(): void {
    this.initPage(this.pageType);
  }

}
