import { Component, OnInit } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('void => *', [
        animate(
          '10s',
          keyframes([
            style({
              opacity: 0.2,
              transform: 'translateX(80%)',
              offset: 0,
            }), // offset = 0
            style({
              opacity: 0.4,
              transform: 'translateX(50%)',
              offset: 0.2,
            }), // offset = 0.33
            style({
              opacity: 0.6,
              transform: 'translateX(20%)',
              offset: 0.4,
            }), // offset = 0.66
            style({
              opacity: 0.8,
              transform: 'translateX(-5%)',
              offset: 0.6,
            }),
            style({
              opacity: 1,
              transform: 'translateX(0%)',
              offset: 1,
            }), // offset = 1
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
