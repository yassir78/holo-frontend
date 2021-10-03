import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [trigger('openModal', [
    state('out', style({ transform: 'translateY(1rem),scale(.9)', opacity: 0 })),
    state('in', style({ transform: 'translateY(0),scale(1)', opacity: 1 })),
    transition('false <=> true', animate(300))
  ]),
  trigger('backgroundSwitch', [
    state('out', style({ opacity: 0 })),
    state('in', style({ opacity: 1 })),
    transition('false <=> true', animate(300))
  ])]
})
export class ModalComponent implements OnInit {
  @Input() modalShow: string = 'in';
  @Input() backgroundSwitch: string = 'in';
  @Input() content: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  continue() {

  }
}
