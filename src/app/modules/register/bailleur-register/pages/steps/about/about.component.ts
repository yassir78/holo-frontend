import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
import { UploadFileService } from 'src/app/services/uploadFileService';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bailleur } from 'src/app/models/bailleur';
import { getUser } from '../../../state/bailleur.selector';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { existingEmailValidator } from 'src/app/validators/UserValidatos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  file: any;
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress: number = 0;
  imageUrl: string | ArrayBuffer | null = 'https://via.placeholder.com/300x300?text=Inserer+Votre+Logo';
  profileImgUrl: any;
  /* @ts-ignore */
  bailleur$: Observable<Bailleur>;
  aboutForm: FormGroup = new FormGroup({
    genre: new FormControl('Monsieur', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    locality: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    domiciledSince: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
    maritalStatus: new FormControl('Célibataire', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required, existingEmailValidator(this.authService))

  })
  constructor(private router: Router, private store: Store<bailleurRegisterState>, private uploadFileService: UploadFileService, private authService: AuthService) { }

  ngOnInit(): void {
    this.bailleur$ = this.store.select(getUser);
    this.hydrateSection();
    this.progress$.subscribe(progress => this.progress = progress);
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
  get password() {
    return this.aboutForm.get('password');
  }
  get cpassword() {
    return this.aboutForm.get('cpassword');
  }

  onFileSelected(event: any) {
    if (event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.imageUrl = reader.result;
      };
      this.uploadFileService.uploadImage(this.file).subscribe(evt => {
        console.log(evt)
        if (evt.type === HttpEventType.UploadProgress) {
          if (evt.total != undefined) {
            this.progress$.next(Math.round(100 * evt.loaded / evt.total));
          }
        }
        else if (evt instanceof HttpResponse) {
          /* @ts-ignore*/
          this.profileImgUrl = evt.body.Location;
          console.log(this.profileImgUrl)
        }


      }, error => {
        console.log(error)
      })

    }
  }
  hydrateSection() {
    this.bailleur$.subscribe(bailleur => {
      this.aboutForm.setValue({
        genre: bailleur.gender ? bailleur.gender : 'Monsieur',
        firstName: bailleur.firstName ? bailleur.firstName : '',
        lastName: bailleur.lastName ? bailleur.lastName : '',
        birth: bailleur.birth ? formatDate(bailleur.birth, 'yyyy-MM-dd', 'en') : '',
        locality: bailleur.locality ? bailleur.locality : '',
        address: bailleur.simpleAddress ? bailleur.simpleAddress : '',
        domiciledSince: bailleur.domiciledSince ? formatDate(bailleur.domiciledSince, 'yyyy-MM-dd', 'en') : '',
        profileImage: bailleur.profileImage ? bailleur.profileImage : '',
        password: bailleur.password ? bailleur.password : '',
        cpassword: bailleur.password ? bailleur.password : '',
        maritalStatus: bailleur.maritalStatus ? bailleur.maritalStatus : 'Célibataire',
        phoneNumber: bailleur.phoneNumber ? bailleur.phoneNumber : '',
        email: bailleur.email ? bailleur.email : ''
      })
      this.imageUrl = bailleur.profileImage ? bailleur.profileImage : 'https://via.placeholder.com/300x300?text=Inserer+Votre+Logo' as string;

    })

  }


  goToActivity() {
    if (this.password?.value != this.cpassword?.value) {
      this.password?.setErrors({ 'inv': true })
      window.scroll(0, 0);

    } else {
      this.store.dispatch(BailleurActions.about({
        gender: this.genre?.value,
        address: this.address?.value,
        birth: new Date(this.birth?.value),
        domiciledSince: new Date(this.domiciledSince?.value),
        email: this.email?.value,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        locality: this.locality?.value,
        profileImage: this.profileImgUrl,
        maritalStatus: this.maritalStatus?.value,
        password: this.password?.value,
        phoneNumber: this.phoneNumber?.value
      }))
      this.router.navigate(['/register/bailleur/address'])
    }

  }

}
