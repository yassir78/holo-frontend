import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  landingForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<landingState>) {
    this.landingForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', [Validators.required]],
      email: ['', Validators.required]
    })
  }
  onSubmit() {
    console.log("hello world")
    console.log(this.nom?.value)
    console.log(this.prenom?.value)
    console.log(this.email?.value)
    console.log(this.telephone?.value)
    this.store.dispatch(LandingActions.createContact({ nom: this.nom?.value, prenom: this.prenom?.value, email: this.email?.value, telephone: this.telephone?.value }))
  }
  get nom() {
    return this.landingForm.get('nom')
  }
  get prenom() {
    return this.landingForm.get('prenom')
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
