// @ts-nocheck
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { landingState } from '../../state/landing.state';
import * as LandingActions from '../../state/landing.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('void => *', [
        animate(
          '5s',
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
export class LandingComponent implements OnInit {
  landingForm: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private fb: FormBuilder, private store: Store<landingState>) {
  }
  onSubmit() {
    console.log("dispatching the saving contact method")
    this.store.dispatch(LandingActions.createContact({ nom: this.nom?.value, prenom: this.prenom?.value, email: this.email?.value, telephone: this.telephone?.value }))
  }
  // @ts-nocheck
  get nom() {
    return this.landingForm.get('nom')
  }
  get prenom() {
    return this.landingForm?.get('prenom')
  }
  get telephone() {
    return this.landingForm.get('telephone')
  }
  get email() {
    return this.landingForm.get('email')
  }
  ngOnInit(): void {
  }

}
