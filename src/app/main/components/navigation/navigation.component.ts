import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  clickedOutside = new BehaviorSubject(false);

  @ViewChild('menu') menu!: ElementRef<MenuComponent>;

  @HostListener('document:click', ['$event'])
  onClick(even: any) {
    if (!(this.menu as any).ref.nativeElement.contains(even.target)) {
      this.clickedOutside.next(true);
    }
    else this.clickedOutside.next(false);
  }

  constructor(
  ) { }

  get localTime() {
    return new Date();
  }
}
