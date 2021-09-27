import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bailleurRegisterState } from '../../../state/bailleur.state';
import * as BailleurActions from "../../../state/bailleur.action"
import { TextractService } from 'src/app/services/textract.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { getGross, getNet, getpayslipProcessEndedSuccessfuly, getpayslipProcessErrorMsg, getpayslipProcessLoading, getUser } from '../../../state/bailleur.selector';
import { UploadFileService } from 'src/app/services/uploadFileService';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  firstMonthSalary: string = "+ Ajouter";
  secondMonthSalary: string = "+ Ajouter";
  thirdMonthSalary: string = "+ Ajouter";
  pursuit: string = "+ Ajouter";
  progress1$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress2$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress3$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress4$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /* @ts-ignore */
  firstMonthSalaryUrl: string;
  /* @ts-ignore */
  secondMonthSalaryUrl: string;
  /* @ts-ignore */
  thirdMonthSalaryUrl: string;
  /* @ts-ignore */
  pursuitUrl: string;
  /* @ts-ignore */
  payslipProcessLoading$: Observable<boolean>;
  /* @ts-ignore */
  payslipProcessErrorMsg$: Observable<string>;
  /* @ts-ignore */
  payslipProcessEndedSuccessfuly$: Observable<boolean>;
  /* @ts-ignore */
  net$: Observable<number>;
  /* @ts-ignore */
  gross$: Observable<number>;
  /* @ts-ignore */
  net: number;
  /* @ts-ignore */
  gross: number;
  /* @ts-ignore */
  user$: Observable<User>;
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
  constructor(private router: Router, private store: Store<bailleurRegisterState>, private textractSerivce: TextractService, private uploadService: UploadFileService) { }

  ngOnInit(): void {
    /* ts-ignore */
    this.payslipProcessEndedSuccessfuly$ = this.store.select(getpayslipProcessEndedSuccessfuly);
    this.payslipProcessErrorMsg$ = this.store.select(getpayslipProcessErrorMsg);
    this.payslipProcessLoading$ = this.store.select(getpayslipProcessLoading);
    this.user$ = this.store.select(getUser);
    this.gross$ = this.store.select(getGross)
    this.net$ = this.store.select(getNet)
    this.net$.subscribe(net => this.net = net);
    this.gross$.subscribe(gross => this.gross = gross)
    this.payslipProcessEndedSuccessfuly$.subscribe(value => {
      if (value) {
        const netMonthlyIncome = this.netMonthlyIncome?.value;
        const grossMonthlyIncome = this.grossMonthlyIncome?.value;
        if (parseInt(netMonthlyIncome) != this.net) {
          this.netMonthlyIncome?.setValue(this.net);
          this.netMonthlyIncome?.setErrors({ 'inv': true })
        }
        if (parseInt(grossMonthlyIncome) != this.gross) {
          this.grossMonthlyIncome?.setValue(this.gross);
          this.grossMonthlyIncome?.setErrors({ 'inv': true })
        }
      }
    })
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
  goToLogin() {
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
      pursuitSheet: this.pursuitUrl,
      payslips: {
        firstMonthSalary: this.firstMonthSalaryUrl,
        secondMonthSalary: this.secondMonthSalaryUrl,
        thirdMonthSalary: this.thirdMonthSalaryUrl,
      }
    }))
    this.user$.subscribe(user => {
      this.store.dispatch(BailleurActions.register({ user: user }))
    })

    this.router.navigate(['/login'])
  }
  returnToProperty() {
    this.router.navigate(['/register/bailleur/property'])
  }
  firstMonthSalaryDocument(event: any) {
    this.firstMonthSalary = event.target.files[0].name;
    console.log(event.target.files[0].name);
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        if (evt.total != undefined) {
          console.log(Math.round(100 * evt.loaded / evt.total))
          this.progress1$.next(Math.round(100 * evt.loaded / evt.total));
        }

      }
      else if (evt instanceof HttpResponse) {
        /* @ts-ignore*/
        this.firstMonthSalaryUrl = evt.body.Location;
        console.log(this.firstMonthSalaryUrl)
      }

    }, error => {
      console.log(error)
    })

    const reader = new FileReader();
    var fileByteArray: any = [];
    reader.readAsArrayBuffer(file);
    reader.onloadend = (event) => {
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
      this.store.dispatch(BailleurActions.processPayslip())
      this.store.dispatch(BailleurActions.processPayslipServer({ buffer: Buffer.from(new Uint8Array(fileByteArray)) }))
    }
  }
  pursuitDocument(event: any) {
    this.pursuit = event.target.files[0].name;
    console.log(event.target.files[0].name);
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        if (evt.total != undefined) {
          console.log(Math.round(100 * evt.loaded / evt.total))
          this.progress4$.next(Math.round(100 * evt.loaded / evt.total));
        }

      }
      else if (evt instanceof HttpResponse) {
        /* @ts-ignore*/
        this.pursuitUrl = evt.body.Location;
        console.log(this.pursuitUrl)
      }
    }, error => {
      console.log(error)
    })
  }
  thirdMonthSalaryDocument(event: any) {
    this.thirdMonthSalary = event.target.files[0].name;
    console.log(event.target.files[0].name);
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        if (evt.total != undefined) {
          console.log(Math.round(100 * evt.loaded / evt.total))
          this.progress3$.next(Math.round(100 * evt.loaded / evt.total));
        }
      }
      else if (evt instanceof HttpResponse) {
        /* @ts-ignore*/
        this.thirdMonthSalaryUrl = evt.body.Location;
        console.log(this.thirdMonthSalaryUrl)
      }
    }, error => {
      console.log(error)
    })
  }

  secondMonthSalaryDocument(event: any) {
    this.secondMonthSalary = event.target.files[0].name;
    console.log(event.target.files[0].name);
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        if (evt.total != undefined) {
          console.log(Math.round(100 * evt.loaded / evt.total))
          this.progress2$.next(Math.round(100 * evt.loaded / evt.total));
        }

      }
      else if (evt instanceof HttpResponse) {
        /* @ts-ignore*/
        this.secondMonthSalaryUrl = evt.body.Location;
        console.log(this.secondMonthSalaryUrl)
      }
    }, error => {
      console.log(error)
    })
  }
}
