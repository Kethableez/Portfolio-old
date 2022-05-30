import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageType } from '../core/models/page-type.model';
import { AppActions, getTheme } from '../core/store/app';
import { RootState } from '../core/store/root.state';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren('section') sections: QueryList<any> = new QueryList();

  // sectionChanged = new BehaviorSubject<PageType>(PageType.LANDING);
  visibleSection = PageType.LANDING;
  theme$ = this.store$.select(getTheme);

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.sections.forEach((section) => {
      if (this.isSectionVisible(section.ref)) {
        // this.sectionChanged.next(section.pageType);
        if (this.visibleSection !== section.pageType) {
          this.visibleSection = section.pageType;
          this.changeTitle();
        }
        // this.visibleSection = section.pageType;
        // this.changeTitle();
      }
    });
  }

  constructor(private store$: Store<RootState>) {}

  changeTitle() {
    this.store$.dispatch(AppActions.setTitle({ title: this.visibleSection }));
  }

  isSectionVisible(section: ElementRef<any>) {
    const rect = section.nativeElement.getBoundingClientRect();
    const topShown = Math.floor(rect.top) >= 0;
    const bottomShown = Math.floor(rect.bottom) <= window.innerHeight;
    return topShown && bottomShown;
  }
}
