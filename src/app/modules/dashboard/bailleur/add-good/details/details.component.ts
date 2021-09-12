import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('selectInput', [
      state('true', style({ opacity: 0, display: 'none' })),
      state('false', style({ opacity: 1, display: 'block' })),
      transition('true => false', animate(100))
    ])
  ]
})
export class DetailsComponent implements OnInit {
  proximites: String[] = ['Autoroute', 'Gare', 'Aéroport', 'Jardin d’enfants', 'Ecole secondaire', 'Commerces', 'Trans. public']
  extras: String[] = ['Lumineux', 'Véranda/terrasse', 'Ascenseur', 'Accès handicapés', 'Cheminée', 'Air conditionné', 'Piscine', 'Jardin', 'Neuf', 'Ascenseur','Attique', 'Baignoire', 'Cuisine équipée', 'Douche', 'Jardin', 'Meublé']
  
  selectViewDropDown: boolean = false;
  selectedViewValue: string = 'Choisissez une vue';

  selectOrientationDropDown: boolean = false;
  selectedOrientationValue: string = 'Choisissez une orientation';

  selectHeatingTypeSystemDropDown: boolean = false;
  selectedHeatingTypeSystemValue: string = 'Choisissez type chauffage';

  selectEnvironmentDropDown: boolean = false;
  selectedEnvironmentValue: string = 'Choisissez un environment';


  detailsForm: FormGroup = new FormGroup({
    numberOfPieces: new FormControl('', Validators.required),
  numberOfRooms: new FormControl('', Validators.required),
  numberOfWC: new FormControl('', Validators.required),
  numberOfBathRooms: new FormControl('', Validators.required),
  numberOfFloors: new FormControl('', Validators.required),
  FloorOfTheApartment:new FormControl('', Validators.required),
  yearOfBuilding: new FormControl('', Validators.required),
  yearOfRenovation:new FormControl('', Validators.required),

  view: new FormControl('', Validators.required),
  orientation: new FormControl('', Validators.required),
  heatingTypeSystem:new FormControl('', Validators.required),
  environment: new FormControl('', Validators.required),
  proximity:new FormArray([], Validators.required),
  extra: new FormArray([], Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
  managementOrientationDropDown(value: string) {
    this.detailsForm.get('orientation')?.setValue(value);
    this.selectedOrientationValue = value;
    this.selectOrientationDropDown = false;
    console.log(this.detailsForm.get('orientation')?.value)
  }
  managementHeatingTypeSystemDropDown(value: string) {
    this.detailsForm.get('heatingTypeSystem')?.setValue(value);
    this.selectedHeatingTypeSystemValue = value;
    this.selectHeatingTypeSystemDropDown = false;
    console.log(this.detailsForm.get('heatingTypeSystem')?.value)
  }
  managementEnvironmentDropDown(value: string) {
    this.detailsForm.get('environment')?.setValue(value);
    this.selectedEnvironmentValue = value;
    this.selectEnvironmentDropDown = false;
    console.log(this.detailsForm.get('environment')?.value)
  }
  managementViewDropDown(value: string) {
    this.detailsForm.get('vue')?.setValue(value);
    this.selectedViewValue = value;
    this.selectViewDropDown = false;
    console.log(this.detailsForm.get('vue')?.value)
  }

  typeDeProximiteValue(value: String, event: any) {
    const typeProx = <FormArray>this.detailsForm.controls.proximity;
    const checked: boolean = event.target.checked;
    if (checked) {
      typeProx.push(new FormControl(value))
    } else {
      const index = typeProx.controls.findIndex(val => val.value == value);
      index > -1 ? typeProx.removeAt(index) : false;
    }
    console.log(typeProx.controls)

  }

  typeExtraValue(value: String, event: any) {
    const typeExtra = <FormArray>this.detailsForm.controls.extra;
    const checked: boolean = event.target.checked;
    if (checked) {
      typeExtra.push(new FormControl(value))
    } else {
      const index = typeExtra.controls.findIndex(val => val.value == value);
      index > -1 ? typeExtra.removeAt(index) : false;
    }
    console.log(typeExtra.controls)

  }

}
