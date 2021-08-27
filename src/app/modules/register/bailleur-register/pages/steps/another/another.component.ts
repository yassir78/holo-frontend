import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action";

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {
   otherForm = new FormGroup({
    smoker: new FormControl('Oui', Validators.required),
    contractHasBeenTerminatedByTheLessor: new FormControl('Oui', Validators.required),
    contractHasBeenTerminatedByTheLessorWhy: new FormControl('', Validators.required),
    lawsuitsDuringTheLastTwoYears: new FormControl('Oui', Validators.required),
    BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears: new FormControl('Oui', Validators.required),
    civilLiabilityInsurance: new FormControl('Oui', Validators.required),
    civilLiabilityInsuranceCompany: new FormControl('', Validators.required),

   })
   



  constructor(private router: Router, private store:Store<bailleurRegisterState>) { }

  ngOnInit(): void {
  }

   
  get smoker(){
    return this.otherForm.get('smoker');
  }
  get contractHasBeenTerminatedByTheLessor(){
   return this.otherForm.get('contractHasBeenTerminatedByTheLessor');
 }
 get contractHasBeenTerminatedByTheLessorWhy(){
   return this.otherForm.get('contractHasBeenTerminatedByTheLessorWhy');
 }
 get lawsuitsDuringTheLastTwoYears(){
   return this.otherForm.get('lawsuitsDuringTheLastTwoYears');
 }
 get BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears(){
   return this.otherForm.get('BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears');
 }
 get civilLiabilityInsurance(){
   return this.otherForm.get('civilLiabilityInsurance');
 }
 get civilLiabilityInsuranceCompany(){
   return this.otherForm.get('civilLiabilityInsuranceCompany');
 }

  goToProperty(){
    this.store.dispatch(BailleurActions.otherInfos({
               smoker:this.smoker?.value,
                contractHasBeenTerminatedByTheLessor:this.contractHasBeenTerminatedByTheLessor?.value,
                contractHasBeenTerminatedByTheLessorWhy:this.contractHasBeenTerminatedByTheLessorWhy?.value,
                lawsuitsDuringTheLastTwoYears:this.lawsuitsDuringTheLastTwoYears?.value,
                BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears:this.lawsuitsDuringTheLastTwoYears?.value,
                civilLiabilityInsurance:this.civilLiabilityInsurance?.value,
                civilLiabilityInsuranceCompany:this.civilLiabilityInsuranceCompany?.value

    }))
   this.router.navigate(['/register/bailleur/property'])
  }

  returnToAddress(){
    this.router.navigate(['/register/bailleur/address'])
  }
}
