import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
import { Observable } from 'rxjs';
import { Bailleur } from 'src/app/models/bailleur';
import { getUser } from '../../../state/bailleur.selector';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm = new FormGroup({
    nationality: new FormControl('Suisse', Validators.required),
    placeOfOrigin: new FormControl('', Validators.required),
    typeOfPermit: new FormControl('Permis C', Validators.required),
    hasPutUnderGuardianship: new FormControl('Oui', Validators.required),
    putUnderGuardianship: new FormControl('', null),
    inSwitzerlandSince: new FormControl('', Validators.required),
    familyOrPrimaryAccommodation: new FormControl('Oui', Validators.required),
    numberOfPeopleOccupyingTheFutureAccommodation: new FormControl('', Validators.required),
    numberOfAdults: new FormControl('', Validators.required),
    numberOfChildren: new FormControl('', Validators.required),
    hasPets: new FormControl('Oui', Validators.required),
    pets: new FormControl('', null),
    hasMusicInstruments: new FormControl('Oui', Validators.required),
    musicInstruments: new FormControl('', null),
  })
  /* @ts-ignore */
  bailleur$: Observable<Bailleur>;
  hasPetsInputShow: boolean = true;
  hasMusicInstrumentsInputShow: boolean = true;
  hasPutUnderGuardianshipInputShow: boolean = true;
  constructor(private router: Router, private store: Store<bailleurRegisterState>) { }

  ngOnInit(): void {
    this.bailleur$ = this.store.select(getUser);
    this.hydrateSection();
  }
  hasPetsSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.hasPetsInputShow = true : this.hasPetsInputShow = false;
    console.log(this.hasMusicInstrumentsInputShow)

  }
  hasMusicInstrumentsSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.hasMusicInstrumentsInputShow = true : this.hasMusicInstrumentsInputShow = false;
    console.log(this.hasMusicInstrumentsInputShow)
  }
  hasPutUnderGuardianshipSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.hasPutUnderGuardianshipInputShow = true : this.hasPutUnderGuardianshipInputShow = false;
    console.log(this.hasPutUnderGuardianshipInputShow)
  }
  get nationality() {
    return this.addressForm.get('nationality')
  }
  get placeOfOrigin() {
    return this.addressForm.get('placeOfOrigin')
  }
  get typeOfPermit() {
    return this.addressForm.get('typeOfPermit')
  }

  get hasPutUnderGuardianship() {
    return this.addressForm.get('hasPutUnderGuardianship')
  }
  get putUnderGuardianship() {
    return this.addressForm.get('putUnderGuardianship')
  }
  get inSwitzerlandSince() {
    return this.addressForm.get('inSwitzerlandSince')
  }
  get familyOrPrimaryAccommodation() {
    return this.addressForm.get('familyOrPrimaryAccommodation')
  }
  get numberOfPeopleOccupyingTheFutureAccommodation() {
    return this.addressForm.get('numberOfPeopleOccupyingTheFutureAccommodation')
  }
  get numberOfAdults() {
    return this.addressForm.get('numberOfAdults')
  }
  get numberOfChildren() {
    return this.addressForm.get('numberOfChildren')
  }
  get hasPets() {
    return this.addressForm.get('hasPets')
  }
  get pets() {
    return this.addressForm.get('pets')
  }
  get musicInstruments() {
    return this.addressForm.get('musicInstruments')
  }
  get hasMusicInstruments() {
    return this.addressForm.get('hasMusicInstruments')
  }
  hydrateSection() {
    this.bailleur$.subscribe(bailleur => {
      console.log("********************");
      console.log(bailleur)
      console.log("********************");

      this.addressForm.setValue({
        nationality: bailleur.address?.nationality ? bailleur.address?.nationality : 'Suisse',
        placeOfOrigin: bailleur.address?.placeOfOrigin ? bailleur.address?.placeOfOrigin : '',
        typeOfPermit: bailleur.address?.typeOfPermit ? bailleur.address.typeOfPermit : 'Permis C',
        hasPutUnderGuardianship: bailleur.address?.hasPutUnderGuardianship ? bailleur.address?.hasPutUnderGuardianship : 'Oui',
        putUnderGuardianship: bailleur.address?.putUnderGuardianship ? bailleur.address?.putUnderGuardianship : 'ss',
        inSwitzerlandSince: bailleur.address?.inSwitzerlandSince ? formatDate(bailleur.address?.inSwitzerlandSince, 'yyyy-MM-dd', 'en') : '',
        familyOrPrimaryAccommodation: bailleur.address?.familyOrPrimaryAccommodation ? bailleur.address?.familyOrPrimaryAccommodation : 'Oui',
        numberOfPeopleOccupyingTheFutureAccommodation: bailleur.address?.numberOfPeopleOccupyingTheFutureAccommodation ? bailleur.address?.numberOfPeopleOccupyingTheFutureAccommodation : '',
        numberOfAdults: bailleur.address?.numberOfAdults ? bailleur.address?.numberOfAdults : '',
        numberOfChildren: bailleur.address?.numberOfChildren ? bailleur.address?.numberOfChildren : '',
        hasPets: bailleur.address?.hasPets ? bailleur.address?.hasPets : 'Oui',
        pets: bailleur.address?.pets ? bailleur.address?.pets : '',
        hasMusicInstruments: bailleur.address?.hasMusicInstruments ? bailleur.address?.hasMusicInstruments : 'Oui',
        musicInstruments: bailleur.address?.musicInstruments ? bailleur.address?.musicInstruments : ''
      })

    })

  }

  goToAnother() {
    this.store.dispatch(BailleurActions.address({
      nationality: this.nationality?.value,
      placeOfOrigin: this.placeOfOrigin?.value,
      typeOfPermit: this.typeOfPermit?.value,
      hasPutUnderGuardianship: this.hasPutUnderGuardianship?.value,
      putUnderGuardianship: this.putUnderGuardianship?.value,
      inSwitzerlandSince: this.inSwitzerlandSince?.value,
      familyOrPrimaryAccommodation: this.familyOrPrimaryAccommodation?.value,
      numberOfPeopleOccupyingTheFutureAccommodation: this.numberOfPeopleOccupyingTheFutureAccommodation?.value,
      numberOfAdults: this.numberOfAdults?.value,
      numberOfChildren: this.numberOfChildren?.value,
      hasPets: this.hasPets?.value,
      pets: this.pets?.value,
      hasMusicInstruments: this.hasMusicInstruments?.value,
      musicInstruments: this.musicInstruments?.value
    }))
    this.router.navigate(["/register/bailleur/another"])
  }
  returnToAbout() {
    this.router.navigate(['/register/bailleur/about'])
  }
}
