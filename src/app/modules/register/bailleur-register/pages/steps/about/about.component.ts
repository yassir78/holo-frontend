import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
import { UploadFileService } from 'src/app/services/uploadFileService';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  file: any;
  progress: { percentage: number } = { percentage: 0 };
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  imageUrl: string | ArrayBuffer | null = 'https://via.placeholder.com/300x300?text=Inserer+Votre+Logo';
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
  constructor(private router: Router, private store: Store<bailleurRegisterState>, private uploadFileService:UploadFileService) { }

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
      this.progress.percentage = 0;
      this.uploadFileService.pushFileToStorage(this.file).subscribe(evt=>{
        if (evt.type === HttpEventType.UploadProgress) {
         console.log(evt)
          if(evt.total !=  undefined)
          this.progress.percentage = Math.round(100 * event.loaded / evt.total);
          this.progress$.next( this.progress.percentage);
        } else if (event instanceof HttpResponse) {
           this.downloadURL = event.body as any;
           console.log(this.downloadURL)
        }
      
        
      })
      
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
