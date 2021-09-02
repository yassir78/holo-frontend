import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ opacity: 0, transform: 'scale(.95)' })),
      state('false', style({ opacity: 1, transform: 'scale(1)' })),
      transition('false <=> true', animate(200))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  open() {
    this.isOpen = !this.isOpen;
  }

}
