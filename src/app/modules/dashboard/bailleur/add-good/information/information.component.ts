import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  animations: [
    trigger('selectInput', [
      state('true', style({ opacity: 0, display: 'none' })),
      state('false', style({ opacity: 1, display: 'block' })),
      transition('true => false', animate(100))
    ])
  ]
})
export class InformationComponent implements OnInit {
  venteOuLocation: string = 'Vente';
  selectRegieDropDown: boolean = false;
  selectRegionDropDown: boolean = false;
  biens: String[] = ['Appartements', 'Meublé', 'Villas / Maison', 'Commerciaux', 'Terrain', 'Immeuble', 'Logt vacances', 'Parkings']
  selectedRegieValue: string = 'Choisissez une régie';
  selectedRegionValue: string = 'Choisissez une région';

  document: string = "+ Ajouter";
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  informationForm: FormGroup = new FormGroup({
  status:new FormControl('', Validators.required),
  agencyName:new FormControl('', Validators.required),
  agencyForm: new FormControl('', Validators.required),
  propertyType:new FormArray([], Validators.required),
  availablity: new FormControl('', Validators.required),
  state: new FormControl('', Validators.required),
  zipCode:new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  livingSpace: new FormControl('', Validators.required),
  terraceArea: new FormControl('', Validators.required),
  gardenArea:new FormControl('', Validators.required),
   
  })
  constructor() { }
  ngOnInit(): void {
  }

  get  status(){
    return this.informationForm.get("status");
  }

  get  agencyName(){
    return this.informationForm.get("agencyName");
  }


  get  agencyForm(){
    return this.informationForm.get("agencyForm");
  }
  get  propertyType(){
    return this.informationForm.get("propertyType");
  }
  get  availablity(){
    return this.informationForm.get("availablity");
  }
  get  address(){
    return this.informationForm.get("address");
  }
  get  state(){
    return this.informationForm.get("state");
  }
  get  zipCode(){
    return this.informationForm.get("zipCode");
  }
  get  terraceArea(){
    return this.informationForm.get("terraceArea");
  }

  get  gardenArea(){
    return this.informationForm.get("gardenArea");
  }

  get livingSpace () {
    return this.informationForm.get("livingSpace");
  }
 
  documentUpload(event: any) {
    console.log(event)
    this.document = event.target.files[0].name;
    // upload process
  }
  typeDeBienValue(value: String, event: any) {
    const typeDeBienArray = <FormArray>this.informationForm.controls.propertyType;
    const checked: boolean = event.target.checked;
    if (checked) {
      typeDeBienArray.push(new FormControl(value))
    } else {
      const index = typeDeBienArray.controls.findIndex(val => val.value == value);
      index > -1 ? typeDeBienArray.removeAt(index) : false;
    }
    console.log(typeDeBienArray.controls)

  }
  managementRegieDropDown(value: string) {
    this.informationForm.get('agencyName')?.setValue(value);
    this.selectedRegieValue = value;
    this.selectRegieDropDown = false;
    console.log(this.informationForm.get('agencyName')?.value)
  }


  managementRegionDropDown(value: string) {
    this.informationForm.get('state')?.setValue(value);
    this.selectedRegionValue = value;
    this.selectRegionDropDown = false;
    console.log(this.informationForm.get('state')?.value)
  }


  formSubmit(){
    console.log({
      status: this.venteOuLocation,
      agencyName: this.agencyName?.value,
      agencyForm: this.agencyName?.value,
      propertyType: this.propertyType?.value,
      availablity: this.availablity?.value,
      state: this.state?.value,
      zipCode: this.zipCode?.value,
      address: this.address?.value,
      livingSpace: this.livingSpace?.value,
      terraceArea: this.terraceArea?.value,
      gardenArea: this.gardenArea?.value,
    })
  }
}
