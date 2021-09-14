import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  animations: [
    trigger('selectInput', [
      state('true', style({ opacity: 0, display: 'none' })),
      state('false', style({ opacity: 1, display: 'block' })),
      transition('true => false', animate(100))
    ])
  ]
})
export class PriceComponent implements OnInit {
  selectTypeOfBrutSalaryDropDown: boolean = false;
  selectedTypeOfBrutSalaryValue: string = 'Par mois';

  
  priceForm: FormGroup = new FormGroup({
  grossPrice: new FormControl('', Validators.required),
  grossPriceType: new FormControl('', Validators.required),
  expenses: new FormControl('', Validators.required),
  netPrice:new FormControl('', Validators.required),
  accessoryFees: new FormControl('', Validators.required),
  parking: new FormControl('', Validators.required),
  interior:new FormControl('', Validators.required),
  exterior: new FormControl('', Validators.required),
 
  })
  constructor(private store: Store<bailleurDashboardState>, private router: Router) { }

  ngOnInit(): void {
  }

  get grossPrice(){
    return this.priceForm.get('grossPrice');
  }
  
  get grossPriceType(){
    return this.priceForm.get('grossPriceType');
  }
  
  get expenses(){
    return this.priceForm.get('expenses');
  }

  get netPrice(){
    return this.priceForm.get('netPrice');
  }

  get accessoryFees(){
    return this.priceForm.get('accessoryFees');
  }

  get parking(){
    return this.priceForm.get('parking');
  }

  get interior(){
    return this.priceForm.get('interior');
  }

  get exterior(){
    return this.priceForm.get('exterior');
  }





  managementTypeOfBrutSalaryDropDown(value: string) {
    this.priceForm.get('grossPriceType')?.setValue(value);
    this.selectedTypeOfBrutSalaryValue = value;
    this.selectTypeOfBrutSalaryDropDown = false;
    console.log(this.priceForm.get('grossPriceType')?.value)
  }

  submitForm(){
  console.log({
    grossPrice: this.grossPrice?.value,
  grossPriceType: this.selectedTypeOfBrutSalaryValue,
  expenses: this.expenses?.value,
  netPrice:this.netPrice?.value,
  accessoryFees: this.accessoryFees?.value,
  parking: this.parking?.value,
  interior: this.interior?.value,
  exterior: this.exterior?.value,
 
  })

  this.store.dispatch(BailleurdbActions.price({
    grossPrice: this.grossPrice?.value,
    grossPriceType: this.selectedTypeOfBrutSalaryValue,
    expenses: this.expenses?.value,
    netPrice:this.netPrice?.value,
    accessoryFees: this.accessoryFees?.value,
    parking: this.parking?.value,
    interior: this.interior?.value,
    exterior: this.exterior?.value,
  }))

  this.router.navigate(['/dashboard/bailleur/add-good/description'])
  }

}
