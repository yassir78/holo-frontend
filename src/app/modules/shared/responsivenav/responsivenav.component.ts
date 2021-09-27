import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'responsivenav',
  templateUrl: './responsivenav.component.html',
  styleUrls: ['./responsivenav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)', opacity: 1
      })),
      state('out', style({
        transform: 'translateY(100%)', opacity: 0
      })),
      transition('in <=> out', animate('200ms')),
    ]),
  ]
})
export class ResponsivenavComponent implements OnInit {
  navbarState: string = 'in';

  constructor() { }

  ngOnInit(): void {
  }

}
