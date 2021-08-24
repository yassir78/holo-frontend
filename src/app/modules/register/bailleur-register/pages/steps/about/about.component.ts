import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as AboutActions from "../../../state/bailleur.action"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutForm: FormGroup = new FormGroup({
    genre: new FormControl('Monsieur', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    locality: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    domiciledSince: new FormControl('', Validators.required),
    profileImage: new FormControl('', Validators.required),
    maritalStatus: new FormControl('Célibataire', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)

  })
  constructor(private router: Router, private store: Store<bailleurRegisterState>) { }

  ngOnInit(): void {
  }
  get genre() {
    return this.aboutForm.get('genre');
  }
  get firstName() {
    return this.aboutForm.get('firstName');
  }
  get lastName() {
    return this.aboutForm.get('lastName');
  }
  get birth() {
    return this.aboutForm.get('birth');
  }
  get locality() {
    return this.aboutForm.get('locality');
  }
  get address() {
    return this.aboutForm.get('address');
  }
  get domiciledSince() {
    return this.aboutForm.get('domiciledSince');
  }
  get maritalStatus() {
    return this.aboutForm.get('maritalStatus');
  }
  get phoneNumber() {
    return this.aboutForm.get('phoneNumber');
  }
  get email() {
    return this.aboutForm.get('email');
  }
  goToActivity() {
    console.log(this.genre?.value)
    console.log(this.firstName?.value)
    console.log(this.lastName?.value)
    console.log(this.birth?.value)
    console.log(this.locality?.value)
    console.log(this.address?.value)
    console.log(this.domiciledSince?.value)
    console.log(this.maritalStatus?.value)
    console.log(this.phoneNumber?.value)
    console.log(this.email?.value)
    //this.store.dispatch(AboutActions.about({gender:this.ge}))
    //this.router.navigate(['/register/bailleur/activity'])
  }

}
