import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
import { Store } from '@ngrx/store';
import { getUser } from '../../../state/bailleur.selector';
import { Bailleur } from 'src/app/models/bailleur';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  propertyForm = new FormGroup({
    currentDonor: new FormControl('', Validators.required),
    numberOfPieces: new FormControl('', Validators.required),
    currentRent: new FormControl('', Validators.required),
    leaseInYourName: new FormControl('Oui', Validators.required),
    ReasonForChange: new FormControl('La raison de votre changement', Validators.required),
    howDidYouFindThisObject: new FormControl('Comment avez-vous trouvé ce objet?', Validators.required),
    doYouHaveACar: new FormControl('Oui', Validators.required),
    HaveACarHowMuch: new FormControl('', null),
    areYouInterestedInAParkingSpace: new FormControl('Oui', Validators.required),
    InterestedInAParkingSpaceHowMuch: new FormControl('', null),
    refrences: new FormControl('', Validators.required),
    possibleRemarks: new FormControl('', Validators.required),
  })

  /* @ts-ignore */
  bailleur$: Observable<Bailleur>;
  constructor(private router: Router, private store: Store<bailleurRegisterState>) { }
  ngOnInit(): void {
    this.bailleur$ = this.store.select(getUser);
    this.hydrateSection();

  }
  doYouHaveACarInputShow: boolean = true;
  areYouInterestedInAParkingSpaceInputShow: boolean = true;

  get currentDonor() {
    return this.propertyForm.get("currentDonor");
  }

  get numberOfPieces() {
    return this.propertyForm.get("numberOfPieces");
  }

  get currentRent() {
    return this.propertyForm.get("currentRent");
  }

  get leaseInYourName() {
    return this.propertyForm.get("leaseInYourName");
  }

  get ReasonForChange() {
    return this.propertyForm.get("ReasonForChange");
  }


  get howDidYouFindThisObject() {
    return this.propertyForm.get("howDidYouFindThisObject");
  }

  get doYouHaveACar() {
    return this.propertyForm.get("doYouHaveACar");
  }

  get HaveACarHowMuch() {
    return this.propertyForm.get("HaveACarHowMuch");
  }


  get areYouInterestedInAParkingSpace() {
    return this.propertyForm.get("areYouInterestedInAParkingSpace");
  }

  get InterestedInAParkingSpaceHowMuch() {
    return this.propertyForm.get("InterestedInAParkingSpaceHowMuch");
  }

  get refrences() {
    return this.propertyForm.get("refrences");
  }


  get possibleRemarks() {
    return this.propertyForm.get("possibleRemarks");
  }
  doYouHaveACarSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.doYouHaveACarInputShow = true : this.doYouHaveACarInputShow = false;
    console.log(this.doYouHaveACarInputShow)

  }
  areYouInterestedInAParkingSpaceSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.areYouInterestedInAParkingSpaceInputShow = true : this.areYouInterestedInAParkingSpaceInputShow = false;
    console.log(this.areYouInterestedInAParkingSpaceInputShow)

  }
  hydrateSection() {
    this.bailleur$.subscribe((bailleur: Bailleur) => {
      console.log(bailleur)
      this.propertyForm.setValue({
        currentDonor: bailleur.property?.currentDonor ? bailleur.property?.currentDonor : '',
        numberOfPieces: bailleur.property?.numberOfPieces ? bailleur.property?.numberOfPieces : '',
        currentRent: bailleur.property?.currentRent ? bailleur.property?.currentRent : '',
        leaseInYourName: bailleur.property?.leaseInYourName ? bailleur.property?.leaseInYourName : 'Oui',
        ReasonForChange: bailleur.property?.ReasonForChange ? bailleur.property?.ReasonForChange : 'La raison de votre changement',
        howDidYouFindThisObject: bailleur.property?.howDidYouFindThisObject ? bailleur.property?.howDidYouFindThisObject : 'Comment avez-vous trouvé ce objet?',
        doYouHaveACar: bailleur.property?.doYouHaveACar ? bailleur.property.doYouHaveACar : 'Oui',
        HaveACarHowMuch: bailleur.property?.HaveACarHowMuch ? bailleur.property?.HaveACarHowMuch : 'Oui',
        areYouInterestedInAParkingSpace: bailleur.property?.areYouInterestedInAParkingSpace ? bailleur.property?.areYouInterestedInAParkingSpace : 'Oui',
        refrences: bailleur.property?.refrences ? bailleur.property?.refrences : '',
        possibleRemarks: bailleur.property?.possibleRemarks ? bailleur.property?.possibleRemarks : '',
        InterestedInAParkingSpaceHowMuch: bailleur.property?.InterestedInAParkingSpaceHowMuch ? bailleur.property?.InterestedInAParkingSpaceHowMuch : 'areYouInterestedInAParkingSpace'
      })
    })

  }
  goToActivity() {
    this.store.dispatch(BailleurActions.property({
      currentDonor: this.currentDonor?.value,
      numberOfPieces: this.numberOfPieces?.value,
      currentRent: this.currentRent?.value,
      leaseInYourName: this.leaseInYourName?.value,
      ReasonForChange: this.ReasonForChange?.value,
      howDidYouFindThisObject: this.howDidYouFindThisObject?.value,
      doYouHaveACar: this.doYouHaveACar?.value,
      HaveACarHowMuch: this.HaveACarHowMuch?.value,
      areYouInterestedInAParkingSpace: this.areYouInterestedInAParkingSpace?.value,
      InterestedInAParkingSpaceHowMuch: this.InterestedInAParkingSpaceHowMuch?.value,
      refrences: this.refrences?.value,
      possibleRemarks: this.possibleRemarks?.value
    }));
    this.router.navigate(['/register/bailleur/activity'])
  }

  returnToAnother() {
    this.router.navigate(['/register/bailleur/another'])
  }
}
