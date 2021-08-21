// @ts-nocheck
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { landingState } from '../../state/landing.state';
import * as LandingActions from '../../state/landing.actions';
import { Observable } from 'rxjs';
import { getLoading } from '../../state/landing.selector'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { delay } from 'rxjs/operators';
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
  @ViewChild('addSuccess') private addSuccess: SwalComponent;
  @ViewChild('addFailure') private addFailure: SwalComponent;
  errorMessage$: Observable<string>;
  errorMessage: string = "";
  loading$: Observable<boolean>;
  addSuccessModalShow$: Observable<boolean>;
  addFailureModalShow$: Observable<boolean>;
  landingForm: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private fb: FormBuilder, private store: Store<landingState>) {
    this.loading$ = this.store.select(store => store.landing.success);
    this.errorMessage$ = this.store.select(store => store.landing.errorMessage);
    this.errorMessage$.subscribe(errorMessage => this.errorMessage = errorMessage)
    this.addSuccessModalShow$ = this.store.select(store => store.landing.addSuccessModalShow)
    this.addFailureModalShow$ = this.store.select(store => store.landing.addFailureModalShow)
    this.addSuccessModalShow$.subscribe(value => value ? this.addSuccess.fire() : false)
    this.addFailureModalShow$.pipe(delay(500)).subscribe(value => value ? this.addFailure.fire() : false)

  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.store.dispatch(LandingActions.createContact({ nom: this.nom?.value, prenom: this.prenom?.value, email: this.email?.value, telephone: this.telephone?.value }))
  }
  resetForm() {
    this.landingForm.reset();
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


}
