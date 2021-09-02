import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/uploadFileService';
import { RemetteurRegisterState } from '../../state/remetteur.state';
import * as RemetteurActions from "../../state/remetteur.action";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { getUser } from '../../state/remetteur.selector';

@Component({
  selector: 'app-locataire-register',
  templateUrl: './locataire-register.component.html',
  styleUrls: ['./locataire-register.component.scss']
})
export class LocataireRegisterComponent implements OnInit {
  /** @ts-ignore */
  user: Observable<User>;
  file: any;
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  imageUrl: string | ArrayBuffer | null = 'https://via.placeholder.com/300x300?text=Inserer+Votre+Logo';
  profileImgUrl: any;
  registerForm: FormGroup = new FormGroup({
    genre: new FormControl('Monsieur', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)

  })
  constructor(private uploadFileService:UploadFileService, private store: Store<RemetteurRegisterState>, private router:Router) { }


  get genre() {
    return this.registerForm.get('genre');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get birth() {
    return this.registerForm.get('birth');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get email() {
    return this.registerForm.get('email');
  }
  ngOnInit(): void {
    this.user = this.store.select(getUser);
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



  register() {
    this.store.dispatch(RemetteurActions.register({
      gender: this.genre?.value,
      birth: new Date(this.birth?.value),
      email: this.email?.value,
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      profileImage: this.profileImgUrl,
      phoneNumber: this.phoneNumber?.value
    }))
    this.user.subscribe(user => {
      this.store.dispatch(RemetteurActions.remetteurRegister({ user: user }))
    })
    this.router.navigate(['/login'])
    
  }


}
