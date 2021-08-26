import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm = new FormGroup({
               nationality:new FormControl('', Validators.required),
                placeOfOrigin:new FormControl('', Validators.required),
                typeOfPermit:new FormControl('', Validators.required),
                hasPutUnderGuardianship: new FormControl('', Validators.required),
                putUnderGuardianship:new FormControl('', Validators.required),
                inSwitzerlandSince:new FormControl('', Validators.required),
                familyOrPrimaryAccommodation:new FormControl('', Validators.required),
                numberOfPeopleOccupyingTheFutureAccommodation:new FormControl('', Validators.required),
                numberOfAdults:new FormControl('', Validators.required),
                numberOfChildren:new FormControl('', Validators.required),
                hasPets:new FormControl('', Validators.required),
                pets:new FormControl('', Validators.required),
                hasMusicInstruments: new FormControl('', Validators.required),
                musicInstruments:new FormControl('', Validators.required),
  })

  
  constructor(private router:Router, private store:Store<bailleurRegisterState>) { }

  ngOnInit(): void {
  }


  get nationality(){
    return this.addressForm.get('nationality')
  }
  get placeOfOrigin(){
    return this.addressForm.get('placeOfOrigin')
  }
  get typeOfPermit(){
    return this.addressForm.get('typeOfPermit')
  }

  get hasPutUnderGuardianship(){
    return this.addressForm.get('hasPutUnderGuardianship')
  }
  get putUnderGuardianship(){
    return this.addressForm.get('putUnderGuardianship')
  }
  get inSwitzerlandSince(){
    return this.addressForm.get('inSwitzerlandSince')
  }
  get familyOrPrimaryAccommodation(){
    return this.addressForm.get('familyOrPrimaryAccommodation')
  }
  get numberOfPeopleOccupyingTheFutureAccommodation(){
    return this.addressForm.get('numberOfPeopleOccupyingTheFutureAccommodation')
  }
  get numberOfAdults(){
    return this.addressForm.get('numberOfAdults')
  }
  get numberOfChildren(){
    return this.addressForm.get('numberOfChildren')
  }
  get hasPets(){
    return this.addressForm.get('hasPets')
  }
  get pets(){
    return this.addressForm.get('pets')
  }
  get musicInstruments(){
    return this.addressForm.get('musicInstruments')
  }
  get hasMusicInstruments(){
    return this.addressForm.get('hasMusicInstruments')
  }
  
  goToAnother(){
    this.store.dispatch(BailleurActions.address({
      nationality:this.nationality?.value,
      placeOfOrigin:this.placeOfOrigin?.value,
      typeOfPermit:this.typeOfPermit?.value,
      hasPutUnderGuardianship:this.hasPutUnderGuardianship?.value,
      putUnderGuardianship:this.putUnderGuardianship?.value,
      inSwitzerlandSince:this.inSwitzerlandSince?.value,
      familyOrPrimaryAccommodation:this.familyOrPrimaryAccommodation?.value,
      numberOfPeopleOccupyingTheFutureAccommodation:this.numberOfPeopleOccupyingTheFutureAccommodation?.value,
      numberOfAdults:this.numberOfAdults?.value,
      numberOfChildren:this.numberOfChildren?.value,
      hasPets:this.hasPets?.value,
      pets:this.pets?.value,
      hasMusicInstruments:this.hasMusicInstruments?.value,
      musicInstruments: this.musicInstruments?.value
    }))
    this.router.navigate(["/register/bailleur/another"])
  }
  returnToActivity(){
    this.router.navigate(['/register/bailleur/activity'])
  }
}
