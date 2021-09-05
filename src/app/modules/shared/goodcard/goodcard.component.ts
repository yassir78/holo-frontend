import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goodcard',
  templateUrl: './goodcard.component.html',
  styleUrls: ['./goodcard.component.scss'],
  animations: [
    trigger('switch', [
      state('true', style({ transform: "translateX(0)" })),
      state('false', style({ transform: "translateX(1.25rem)" })),
      transition('false <=> true', animate(200))
    ])
  ]
})
export class GoodcardComponent implements OnInit {
  switch: boolean = false;
  constructor() { }
  switchInput() {
    console.log("hello world")
    this.switch = !this.switch;
  }
  ngOnInit(): void {
  }

}
