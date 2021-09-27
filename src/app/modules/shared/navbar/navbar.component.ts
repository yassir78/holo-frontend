import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ opacity: 0 })),
      state('false', style({ opacity: 1 })),
      transition('false <=> true', animate(200))
    ]),
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)', opacity: 1
      })),
      state('out', style({
        transform: 'translateY(-100%)', opacity: 0
      })),
      transition('in <=> out', animate('200ms')),
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = true;
  navbarState: string = 'in';
  addMenu: string = 'true';
  notification: string = 'true';
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }
  currentPosition = window.pageYOffset;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.notification = 'true';
      this.addMenu = 'true';
    }
  }

  openNotificationMenu() {
    this.addMenu = 'true';
    this.notification = this.notification == 'true' ? 'false' : 'true';

  }
  openAddMenu() {
    this.addMenu = this.addMenu == 'true' ? 'false' : 'true';
    this.notification = 'true';
  }

}
