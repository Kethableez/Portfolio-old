import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { PageType } from '../core/models/page-type.model';
import { AppActions } from '../core/store/app';
import { RootState } from '../core/store/root.state';

export enum Language {
  PL = 'pl',
  EN = 'en',
}

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren('section') sections: QueryList<any> = new QueryList();

  sectionChanged = new BehaviorSubject<PageType>(PageType.LANDING);

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.sections.forEach((section) => {
      if (this.isSectionVisible(section.ref)) {
        console.log('next', section.pageType);
        this.sectionChanged.next(section.pageType);
        this.changeTitle();
      }
    });

  }

  constructor(
    private store$: Store<RootState>,
    private translate: TranslateService,
    private title: Title) {
  }

  changeTitle() {
    this.store$.dispatch(AppActions.setTitle({ title: this.sectionChanged.value }));
  }

  isSectionVisible(section: ElementRef<any>) {
    const rect = section.nativeElement.getBoundingClientRect();
    const topShown = this.floor(rect.top) >= 0;
    const bottomShown = this.floor(rect.bottom) <= window.innerHeight;
    return topShown && bottomShown;
  }

  private floor(num: number) {
    return Math.floor(num);
  }

  getTitleKey(page: string) {
    return `title.${page}`;
  }


  get Language() {
    return Language;
  }

  get PageType() {
    return PageType;
  }
}
