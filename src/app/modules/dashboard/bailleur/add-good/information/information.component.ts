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
  document: string = "+ Ajouter";
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  informationForm: FormGroup = new FormGroup({
    saleOrRental: new FormControl('Vente', Validators.required),
    disponibilityDate: new FormControl('', Validators.required),
    management: new FormControl('', Validators.required),
    typeOfGood: new FormArray([], Validators.required),
    zipCode: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    livingArea: new FormControl('', Validators.required),
    terraceBalconyArea: new FormControl('', Validators.required),
    gardenArea: new FormControl('', Validators.required)
  })
  constructor() { }
  documentUpload(event: any) {
    console.log(event)
    this.document = event.target.files[0].name;
    // upload process
  }
  typeDeBienValue(value: String, event: any) {
    const typeDeBienArray = <FormArray>this.informationForm.controls.typeOfGood;
    const checked: boolean = event.target.checked;
    if (checked) {
      typeDeBienArray.push(new FormControl(value))
    } else {
      const index = typeDeBienArray.controls.findIndex(val => val.value == value);
      index > -1 ? typeDeBienArray.removeAt(index) : false;
    }
    console.log(typeDeBienArray.controls)

  }
  managementDropDown(value: string) {
    this.informationForm.get('management')?.setValue(value);
    this.selectedRegieValue = value;
    this.selectRegieDropDown = false;
    console.log(this.informationForm.get('management')?.value)
  }
  ngOnInit(): void {
  }

}
