import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  file: any;
  imageUrl: string | ArrayBuffer | null =
    '<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">'+
    +'<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />'+
  '</svg>';
  downloadURL: any;
  aboutForm: FormGroup = new FormGroup({
    genre: new FormControl('Monsieur', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    locality: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    domiciledSince: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
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

  onFileSelected(event: any) {
    if (event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.imageUrl = reader.result;
      };
      this.uploadFileService.pushFileToStorage(this.file).subscribe()
  }
  }

 
 
  goToActivity() {

    this.store.dispatch(BailleurActions.about({
      gender: this.genre?.value,
      address: this.address?.value,
      birth: new Date(this.birth?.value),
      domiciledSince: new Date(this.domiciledSince?.value),
      email: this.email?.value,
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      locality: this.locality?.value,
      maritalStatus: this.maritalStatus?.value,
      phoneNumber: this.phoneNumber?.value
    }))
    this.router.navigate(['/register/bailleur/address'])
  }

}
