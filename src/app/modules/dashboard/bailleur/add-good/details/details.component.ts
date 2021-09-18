import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
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
  extras: String[] = ['Lumineux', 'Véranda/terrasse', 'Ascenseur', 'Accès handicapés', 'Cheminée', 'Air conditionné', 'Piscine', 'Jardin', 'Neuf', 'Ascenseur', 'Attique', 'Baignoire', 'Cuisine équipée', 'Douche', 'Jardin', 'Meublé']

  _selectViewDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectViewDropDown$: Observable<boolean> = this._selectViewDropDown.asObservable();
  selectedViewValue: string = 'Choisissez une vue';

  _selectOrientationDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectOrientationDropDown$: Observable<boolean> = this._selectOrientationDropDown.asObservable();
  selectedOrientationValue: string = 'Choisissez une orientation';

  _selectHeatingTypeSystemDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectHeatingTypeSystemDropDown$: Observable<boolean> = this._selectHeatingTypeSystemDropDown.asObservable();
  selectedHeatingTypeSystemValue: string = 'Choisissez type chauffage';

  _selectEnvironmentDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectEnvironmentDropDown$: Observable<boolean> = this._selectEnvironmentDropDown.asObservable()
  selectedEnvironmentValue: string = 'Choisissez un environment';


  detailsForm: FormGroup = new FormGroup({
    numberOfPieces: new FormControl('', Validators.required),
    numberOfRooms: new FormControl('', Validators.required),
    numberOfWC: new FormControl('', Validators.required),
    numberOfBathRooms: new FormControl('', Validators.required),
    numberOfFloors: new FormControl('', Validators.required),
    FloorOfTheApartment: new FormControl('', Validators.required),
    yearOfBuilding: new FormControl('', Validators.required),
    yearOfRenovation: new FormControl('', Validators.required),
    view: new FormControl('', Validators.required),
    orientation: new FormControl('', Validators.required),
    heatingTypeSystem: new FormControl('', Validators.required),
    environment: new FormControl('', Validators.required),
    proximity: new FormArray([], Validators.required),
    extra: new FormArray([], Validators.required),
  })
  constructor(private store: Store<bailleurDashboardState>, private router: Router) { }

  ngOnInit(): void {
    this.selectViewDropDown$.subscribe(value => {
      console.log(value);
      if (!value) {
        if (this.selectedViewValue == "Choisissez une vue") {
          this.view?.setErrors({ 'invalid': true })
        } else {
          if (this.view?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.view?.errors['invalid'];
            this.view?.updateValueAndValidity();
          }
        }
      }
    });
    this.selectOrientationDropDown$.subscribe(value => {
      if (!value) {
        if (this.selectedOrientationValue == "Choisissez une orientation") {
          this.orientation?.setErrors({ 'invalid': true })
        } else {
          if (this.orientation?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.orientation?.errors['invalid'];
            this.orientation?.updateValueAndValidity();
          }
        }
      }
    });
    this.selectHeatingTypeSystemDropDown$.subscribe(value => {
      if (!value) {
        if (this.selectedHeatingTypeSystemValue == "Choisissez type chauffage") {
          this.heatingTypeSystem?.setErrors({ 'invalid': true })
        } else {
          if (this.heatingTypeSystem?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.heatingTypeSystem?.errors['invalid'];
            this.heatingTypeSystem?.updateValueAndValidity();
          }
        }
      }
    });
    this.selectEnvironmentDropDown$.subscribe(value => {
      if (!value) {
        if (this.selectedEnvironmentValue == "Choisissez un environment") {
          this.environment?.setErrors({ 'invalid': true })
        } else {
          if (this.environment?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.environment?.errors['invalid'];
            this.environment?.updateValueAndValidity();
          }
        }
      }
    });
  }

  switchSelectedView() {
    this._selectViewDropDown.next(!this._selectViewDropDown.getValue());
  }
  switchSelectedOrientation() {
    this._selectOrientationDropDown.next(!this._selectOrientationDropDown.getValue());
  }
  switchHeatingTypeSystem() {
    this._selectHeatingTypeSystemDropDown.next(!this._selectHeatingTypeSystemDropDown.getValue());
  }
  switchSelectEnvironment() {
    this._selectEnvironmentDropDown.next(!this._selectEnvironmentDropDown.getValue());

  }
  get numberOfPieces() {
    return this.detailsForm.get("numberOfPieces");
  }

  get numberOfRooms() {
    return this.detailsForm.get("numberOfRooms");
  }

  get numberOfWC() {
    return this.detailsForm.get("numberOfWC");
  }

  get numberOfBathRooms() {
    return this.detailsForm.get("numberOfBathRooms");
  }

  get numberOfFloors() {
    return this.detailsForm.get("numberOfFloors");
  }
  get FloorOfTheApartment() {
    return this.detailsForm.get("FloorOfTheApartment");
  }
  get yearOfBuilding() {
    return this.detailsForm.get("yearOfBuilding");
  }
  get yearOfRenovation() {
    return this.detailsForm.get("yearOfRenovation");
  }
  get view() {
    return this.detailsForm.get("view");
  }
  get orientation() {
    return this.detailsForm.get("orientation");
  }
  get heatingTypeSystem() {
    return this.detailsForm.get("heatingTypeSystem");
  }
  get environment() {
    return this.detailsForm.get("environment");
  }
  get proximity() {
    return this.detailsForm.get("proximity");
  }
  get extra() {
    return this.detailsForm.get("extra");
  }

  managementOrientationDropDown(value: string) {
    this.orientation?.setValue(value);
    this.selectedOrientationValue = value;
    this._selectOrientationDropDown.next(false);
    console.log(this.detailsForm.get('orientation')?.value)
  }
  managementHeatingTypeSystemDropDown(value: string) {
    this.heatingTypeSystem?.setValue(value);
    this.selectedHeatingTypeSystemValue = value;
    this._selectHeatingTypeSystemDropDown.next(false);
    console.log(this.detailsForm.get('heatingTypeSystem')?.value)
  }
  managementEnvironmentDropDown(value: string) {
    this.environment?.setValue(value);
    this.selectedEnvironmentValue = value;
    this._selectEnvironmentDropDown.next(false);
    console.log(this.detailsForm.get('environment')?.value)
  }
  managementViewDropDown(value: string) {
    this.view?.setValue(value);
    this.selectedViewValue = value;
    this._selectViewDropDown.next(false);
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
  formSubmit() {


    console.log({
      numberOfPieces: this.numberOfPieces?.value,
      numberOfRooms: this.numberOfRooms?.value,
      numberOfWC: this.numberOfWC?.value,
      numberOfBathRooms: this.numberOfBathRooms?.value,
      numberOfFloors: this.numberOfFloors?.value,
      FloorOfTheApartment: this.FloorOfTheApartment?.value,
      yearOfBuilding: this.yearOfBuilding?.value,
      yearOfRenovation: this.yearOfRenovation?.value,

      view: this.selectedViewValue,
      orientation: this.selectedOrientationValue,
      heatingTypeSystem: this.selectedHeatingTypeSystemValue,
      environment: this.selectedEnvironmentValue,
      proximity: this.proximity?.value,
      extra: this.extra?.value,
    })

    this.store.dispatch(BailleurdbActions.details({
      numberOfPieces: this.numberOfPieces?.value,
      numberOfRooms: this.numberOfRooms?.value,
      numberOfWC: this.numberOfWC?.value,
      numberOfBathRooms: this.numberOfBathRooms?.value,
      numberOfFloors: this.numberOfFloors?.value,
      FloorOfTheApartment: this.FloorOfTheApartment?.value,
      yearOfBuilding: this.yearOfBuilding?.value,
      yearOfRenovation: this.yearOfRenovation?.value,
      view: this.selectedViewValue,
      orientation: this.selectedOrientationValue,
      heatingTypeSystem: this.selectedHeatingTypeSystemValue,
      environment: this.selectedEnvironmentValue,
      proximity: this.proximity?.value,
      extra: this.extra?.value,
    }))

    this.router.navigate(['/dashboard/bailleur/add-good/price'])

  }
}
