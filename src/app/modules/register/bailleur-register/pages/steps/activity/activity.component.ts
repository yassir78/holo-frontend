import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action"
import { TextractService } from 'src/app/services/textract.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  currentInput: string = "+  Ajouter";

  activityForm: FormGroup = new FormGroup({
    profession: new FormControl('', Validators.required),
    professionDate: new FormControl('', Validators.required),
    employer: new FormControl('', Validators.required),
    workplace: new FormControl('', Validators.required),
    contactPerson: new FormControl('', Validators.required),
    professionalPhoneNumber: new FormControl('', Validators.required),
    grossMonthlyIncome: new FormControl('', Validators.required),
    netMonthlyIncome: new FormControl('', Validators.required),
    lastEmployer: new FormControl('', Validators.required),
    lastEmployerSince: new FormControl('', Validators.required),
    pursuitSheet: new FormControl('', null)
  })
  constructor(private router: Router, private store: Store<bailleurRegisterState>, private textractSerivce: TextractService) { }

  ngOnInit(): void {
  }

  get profession() {
    return this.activityForm.get('profession')
  }

  get professionDate() {
    return this.activityForm.get('professionDate')
  }

  get employer() {
    return this.activityForm.get('employer')
  }

  get workplace() {
    return this.activityForm.get('workplace')
  }
  get contactPerson() {
    return this.activityForm.get('contactPerson')
  }
  get professionalPhoneNumber() {
    return this.activityForm.get('professionalPhoneNumber')
  }
  get grossMonthlyIncome() {
    return this.activityForm.get('grossMonthlyIncome')
  }
  get netMonthlyIncome() {
    return this.activityForm.get('netMonthlyIncome')
  }
  get lastEmployer() {
    return this.activityForm.get('lastEmployer')
  }
  get lastEmployerSince() {
    return this.activityForm.get('lastEmployerSince')
  }
  get pursuitSheet() {
    return this.activityForm.get('pursuitSheet')
  }



  goToAddress() {
    this.store.dispatch(BailleurActions.profession({
      profession: this.profession?.value,
      professionDate: this.professionDate?.value,
      employer: this.employer?.value,
      workplace: this.workplace?.value,
      contactPerson: this.contactPerson?.value,
      professionalPhoneNumber: this.professionalPhoneNumber?.value,
      grossMonthlyIncome: this.grossMonthlyIncome?.value,
      netMonthlyIncome: this.netMonthlyIncome?.value,
      lastEmployer: this.lastEmployer?.value,
      lastEmployerSince: this.lastEmployerSince?.value,
      pursuitSheet: this.pursuitSheet?.value,
      payslips: []
    }))
    this.router.navigate(['/register/bailleur/address'])
  }

  returnToAbout() {
    this.router.navigate(['/register/bailleur/about'])
  }


  async onFileSelected(event: any) {
    this.currentInput = event.target.files[0].name + "  x";
    console.log(event.target.files[0].name);
    const file: File = event.target.files[0];
    const reader = new FileReader();
    /*     reader.onload = async () => {
          const data = await this.textractSerivce.analyseDocument(reader.result);
          console.log(data)
        }; */
    var fileByteArray: any = [];
    reader.readAsArrayBuffer(file);
    reader.onloadend = async (event) => {
      /* @ts-ignore */
      if (event.target.readyState == FileReader.DONE) {
        /* @ts-ignore */
        var arrayBuffer = event.target.result,
          /* @ts-ignore */
          array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < array.length; i++) {
          fileByteArray.push(array[i]);
        }
      }
      const data = await this.textractSerivce.analyseDocument(Buffer.from(new Uint8Array(fileByteArray)));
      console.log(data)
    }
  }
}
