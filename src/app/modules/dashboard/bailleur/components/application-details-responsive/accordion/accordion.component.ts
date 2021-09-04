import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('activeAnimation', [
      state('true', style({ transform: "translateY(-10%)", 'opacity': '0' })),
      state('false', style({ transform: "translateY(0)", 'opacity': '1' })),
      transition('true <=> false', animate(200))
    ])
  ]
})
export class AccordionComponent implements OnInit {
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordion() {
    console.log("this is the accordion toggle function !!")
    this.active = !this.active;
  }

}
