import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('menu') menu!: ElementRef<MenuComponent>;

  @HostListener('document:click', ['$event'])
  onClick(even: any) {
    if (!(this.menu as any).ref.nativeElement.contains(even.target)) {}
  }

  constructor(
    private contact: ContactService
  ) { }

  ngOnInit(): void {
  }

  get localTime() {
    return new Date();
  }

  download() {
    this.contact.downloadCV().subscribe((file) => saveAs(file, 'AJCVPL.pdf'));
  }
}
