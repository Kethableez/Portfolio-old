import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Store } from '@ngrx/store';
import { PageType } from '../core/models/page-type.model';
import { AppActions, getTheme } from '../core/store/app';
import { isOpen } from '../core/store/display';
import { RootState } from '../core/store/root.state';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren('section') sections: QueryList<any> = new QueryList();

  visibleSection = PageType.LANDING;
  theme$ = this.store$.select(getTheme);

  isDisplayOpen$ = this.store$.select(isOpen);

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.sections.forEach((section) => {
      if (this.isSectionVisible(section.ref)) {
        if (this.visibleSection !== section.pageType) {
          this.visibleSection = section.pageType;
          this.changeTitle();
        }
      }
    });
  }

  constructor(private store$: Store<RootState>) {}

  get PageType() {
    return PageType;
  }

  changeTitle() {
    this.store$.dispatch(AppActions.setTitle({ title: this.visibleSection }));
  }

  isSectionVisible(section: ElementRef<any>) {
    const rect = section.nativeElement.getBoundingClientRect();
    const topShown = Math.floor(rect.top) >= 0;
    const bottomShown = Math.floor(rect.bottom) <= window.innerHeight;
    return topShown && bottomShown;
  }

  isVisible(pageType: PageType) {
    return this.visibleSection === pageType;
  }
}
