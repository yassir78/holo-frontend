import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";
import { Bailleur } from 'src/app/models/bailleur';
import { getUser } from '../../../state/bailleur.selector';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {
  otherForm = new FormGroup({
    smoker: new FormControl('Oui', Validators.required),
    contractHasBeenTerminatedByTheLessor: new FormControl('Oui', Validators.required),
    contractHasBeenTerminatedByTheLessorWhy: new FormControl('', null),
    lawsuitsDuringTheLastTwoYears: new FormControl('Oui', Validators.required),
    BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears: new FormControl('Oui', Validators.required),
    civilLiabilityInsurance: new FormControl('Oui', Validators.required),
    civilLiabilityInsuranceCompany: new FormControl('', null),

  })

  contractHasBeenTerminatedByTheLessorInputShow: boolean = true;
  civilLiabilityInsuranceInputShow: boolean = true;
  /* @ts-ignore */
  bailleur$: Observable<Bailleur>;

  constructor(private router: Router, private store: Store<bailleurRegisterState>) { }

  ngOnInit(): void {
    this.bailleur$ = this.store.select(getUser);
    this.hydrateSection();
  }


  get smoker() {
    return this.otherForm.get('smoker');
  }
  get contractHasBeenTerminatedByTheLessor() {
    return this.otherForm.get('contractHasBeenTerminatedByTheLessor');
  }
  get contractHasBeenTerminatedByTheLessorWhy() {
    return this.otherForm.get('contractHasBeenTerminatedByTheLessorWhy');
  }
  get lawsuitsDuringTheLastTwoYears() {
    return this.otherForm.get('lawsuitsDuringTheLastTwoYears');
  }
  get BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears() {
    return this.otherForm.get('BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears');
  }
  get civilLiabilityInsurance() {
    return this.otherForm.get('civilLiabilityInsurance');
  }
  get civilLiabilityInsuranceCompany() {
    return this.otherForm.get('civilLiabilityInsuranceCompany');
  }
  contractHasBeenTerminatedByTheLessorSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.contractHasBeenTerminatedByTheLessorInputShow = true : this.contractHasBeenTerminatedByTheLessorInputShow = false;
    console.log(this.contractHasBeenTerminatedByTheLessorInputShow)

  }
  civilLiabilityInsuranceSelect(target: any) {
    const value = target.value;
    value === 'Oui' ? this.civilLiabilityInsuranceInputShow = true : this.civilLiabilityInsuranceInputShow = false;
    console.log(this.civilLiabilityInsuranceInputShow)

  }
  goToProperty() {
    this.store.dispatch(BailleurActions.otherInfos({
      smoker: this.smoker?.value,
      contractHasBeenTerminatedByTheLessor: this.contractHasBeenTerminatedByTheLessor?.value,
      contractHasBeenTerminatedByTheLessorWhy: this.contractHasBeenTerminatedByTheLessorWhy?.value,
      lawsuitsDuringTheLastTwoYears: this.lawsuitsDuringTheLastTwoYears?.value,
      BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears: this.lawsuitsDuringTheLastTwoYears?.value,
      civilLiabilityInsurance: this.civilLiabilityInsurance?.value,
      civilLiabilityInsuranceCompany: this.civilLiabilityInsuranceCompany?.value

    }))
    this.router.navigate(['/register/bailleur/property'])
  }
  hydrateSection() {
    this.bailleur$.subscribe((bailleur: Bailleur) => {
      this.otherForm.setValue({
        smoker: bailleur.other?.smoker ? bailleur.other?.smoker : 'Oui',
        contractHasBeenTerminatedByTheLessor: bailleur.other?.contractHasBeenTerminatedByTheLessor ? bailleur.other?.contractHasBeenTerminatedByTheLessor : 'Oui',
        contractHasBeenTerminatedByTheLessorWhy: bailleur.other?.contractHasBeenTerminatedByTheLessorWhy ? bailleur.other?.contractHasBeenTerminatedByTheLessorWhy : '',
        lawsuitsDuringTheLastTwoYears: bailleur.other?.lawsuitsDuringTheLastTwoYears ? bailleur.other?.lawsuitsDuringTheLastTwoYears : 'Oui',
        BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears: bailleur.other?.BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears ? bailleur.other?.BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears : 'Oui',
        civilLiabilityInsurance: bailleur.other?.civilLiabilityInsurance ? bailleur.other?.civilLiabilityInsurance : 'Oui',
        civilLiabilityInsuranceCompany: bailleur.other?.civilLiabilityInsuranceCompany ? bailleur.other?.civilLiabilityInsuranceCompany : ''
      })

    })

  }
  returnToAddress() {
    this.router.navigate(['/register/bailleur/address'])
  }
}
