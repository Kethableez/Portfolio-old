import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild('menu') menu!: ElementRef<MenuComponent>;

  // @HostListener('document:click', ['$event'])
  // onClick(even: any) {
  //   // if (!(this.menu as any).ref.nativeElement.contains(even.target)) {}
  // }

  constructor(
  ) { }

  get localTime() {
    return new Date();
  }
}
