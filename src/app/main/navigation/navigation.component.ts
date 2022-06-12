import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/store/root.state';
import { TerminalActions } from 'src/app/core/store/terminal';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('menu') menu!: ElementRef<MenuComponent>;
  @ViewChild('select') select!: ElementRef<SelectComponent>;

  @HostListener('document:click', ['$event'])
  onClick(even: any) {
    if (!(this.menu as any).ref.nativeElement.contains(even.target)) {}
    if (!(this.select as any).ref.nativeElement.contains(even.target)) {}
  }

  constructor(
    private store$: Store<RootState>
  ) { }

  ngOnInit(): void {
  }

  get localTime() {
    return new Date();
  }
}
