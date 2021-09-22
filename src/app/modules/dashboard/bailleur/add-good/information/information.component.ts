import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Good } from 'src/app/models/good';
import { UploadFileService } from 'src/app/services/uploadFileService';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { getGood } from '../../state/bailleurdb.selector';
import { bailleurDashboardState } from '../../state/bailleurdb.state';
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
   /* @ts-ignore */
 good$: Observable<Good>;
 good:Good = {};
  venteOuLocation: string = 'Vente';
  _selectRegieDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectRegieDropDown$: Observable<boolean> = this._selectRegieDropDown.asObservable();
  _selectRegionDropDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectRegionDropDown$: Observable<boolean> = this._selectRegionDropDown.asObservable();
  biens: string[] = ['Appartements', 'Meublé', 'Villas / Maison', 'Commerciaux', 'Terrain', 'Immeuble', 'Logt vacances', 'Parkings']
  selectedRegieValue: string = 'Choisissez une régie';
  selectedRegionValue: string = 'Choisissez une région';
  /* @ts-ignore */
  documentUrl: string;
  document: string = "+ Ajouter";
  progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  informationForm: FormGroup = new FormGroup({
    status: new FormControl('', null),
    agencyName: new FormControl('', Validators.required),
    agencyForm: new FormControl('', Validators.required),
    propertyType: new FormArray([], Validators.required),
    availablity: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    livingSpace: new FormControl('', Validators.required),
    terraceArea: new FormControl('', Validators.required),
    gardenArea: new FormControl('', Validators.required),

  })
  constructor(  public fb: FormBuilder,private store: Store<bailleurDashboardState>, private router: Router, private uploadService: UploadFileService) { }
  ngOnInit(): void {
    this.selectRegieDropDown$.subscribe(value => {
      if (!value) {
        if (this.selectedRegieValue == "Choisissez une régie") {
          this.agencyName?.setErrors({ 'invalid': true })
        } else {
          if (this.agencyName?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.agencyName?.errors['invalid'];
            this.agencyName?.updateValueAndValidity();
          }
        }
      }
    });
    this.selectRegionDropDown$.subscribe(value => {
      if (!value) {
        if (this.selectedRegionValue == "Choisissez une région") {
          this.state?.setErrors({ 'invalid': true })
        } else {
          if (this.state?.hasError('invalid')) {
            /* @ts-ignore */
            delete this.state?.errors['invalid'];
            this.state?.updateValueAndValidity();
          }
        }
      }
    });

    this.good$ = this.store.select(getGood);
    this.good$.subscribe(good => {
      console.log(this.good)
      if(Object.keys(good).length !== 0 && good.constructor === Object){
        this.good = good;
          this.status?.setValue(this.good.status)
          this.agencyName?.setValue(this.good.agencyName)
          this.agencyForm?.setValue(this.good.agencyForm)
           
                                          /* @ts-ignore */
          console.log( JSON.stringify(this.good.propertyType));
          const typeDeBienArray = <FormArray>this.informationForm.controls.propertyType;
                   /* @ts-ignore */
          this.good.propertyType.forEach(value => {
            typeDeBienArray.push(new FormControl(value))
          })
                                /* @ts-ignore */
         // this.propertyType?.setValue(JSON.stringify(this.good.propertyType))
          this.availablity?.setValue(this.good.availablity)
          this.state?.setValue(this.good.state)
          this.zipCode?.setValue(this.good.zipCode)
          this.address?.setValue(this.good.address)
          this.livingSpace?.setValue(this.good.livingSpace)
          this.terraceArea?.setValue(this.good.terraceArea)
          this.gardenArea?.setValue(this.good.gardenArea)
                      /* @ts-ignore */
          this.selectedRegionValue = this.good.state;
                            /* @ts-ignore */
          this.selectedRegieValue = this.good.agencyName;
                                  /* @ts-ignore */
          this.venteOuLocation = this.good.status;
        }
      
    })
  }
  switchRegieDropDown() {
    this._selectRegieDropDown.next(!this._selectRegieDropDown.getValue());
  }
  switchRegionDropDown() {
    this._selectRegionDropDown.next(!this._selectRegionDropDown.getValue());

  }
  get status() {
    return this.informationForm.get("status");
  }

  get agencyName() {
    return this.informationForm.get("agencyName");
  }


  get agencyForm() {
    return this.informationForm.get("agencyForm");
  }
  get propertyType() {
    return this.informationForm.get("propertyType");
  }
  get availablity() {
    return this.informationForm.get("availablity");
  }
  get address() {
    return this.informationForm.get("address");
  }
  get state() {
    return this.informationForm.get("state");
  }
  get zipCode() {
    return this.informationForm.get("zipCode");
  }
  get terraceArea() {
    return this.informationForm.get("terraceArea");
  }

  get gardenArea() {
    return this.informationForm.get("gardenArea");
  }

  get livingSpace() {
    return this.informationForm.get("livingSpace");
  }


  documentUpload(event: any) {
    this.progress$.next(0);
    this.document = event.target.files[0].name;
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        if (evt.total != undefined) {
          console.log(Math.round(90 * evt.loaded / evt.total))
          this.progress$.next(Math.round(90 * evt.loaded / evt.total));
        }

      }
      else if (evt instanceof HttpResponse) {
        /* @ts-ignore*/
        this.documentUrl = evt.body.Location;
        console.log(this.documentUrl);
        this.progress$.next(100);

      }
    }, error => {
      console.log(error)
    })
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
    this.agencyName?.setValue(value);
    this.selectedRegieValue = value;
    this._selectRegieDropDown.next(false);
    console.log(this.informationForm.get('agencyName')?.value)
  }


  managementRegionDropDown(value: string) {
    this.informationForm.get('state')?.setValue(value);
    this.selectedRegionValue = value;
    this._selectRegionDropDown.next(false);
    console.log(this.informationForm.get('state')?.value)
  }


  formSubmit() {


    this.store.dispatch(BailleurdbActions.information({
      status: this.venteOuLocation,
      agencyName: this.agencyName?.value,
      agencyForm: this.documentUrl,
      propertyType: this.propertyType?.value,
      availablity: this.availablity?.value,
      state: this.state?.value,
      zipCode: this.zipCode?.value,
      address: this.address?.value,
      livingSpace: this.livingSpace?.value,
      terraceArea: this.terraceArea?.value,
      gardenArea: this.gardenArea?.value,
    }))

    this.router.navigate(['/dashboard/bailleur/add-good/details'])


  }
}
