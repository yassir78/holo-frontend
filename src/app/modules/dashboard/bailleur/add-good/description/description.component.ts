import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';
import { Good } from 'src/app/models/good';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { getGood } from '../../state/bailleurdb.selector';
import { bailleurDashboardState } from '../../state/bailleurdb.state';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, OnDestroy {
   /* @ts-ignore */
 good$: Observable<Good>;
 good:Good = {};
  public Editor = ClassicEditor;
  descriptionBien: string = "<p style='color:red'>Description de votre bien . . .</p>";
  descForm: FormGroup = new FormGroup({
    propertyName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)

  })
  constructor(private store: Store<bailleurDashboardState>, private router: Router) {

  }
  ngOnDestroy(): void {
    console.log("this is the destroy method")
  }
  ngOnInit(): void {
    this.good$ = this.store.select(getGood);
    this.good$.subscribe((good: Good) => {
      this.good = good;
      console.log(this.good)
      this.propertyName?.setValue(this.good.propertyName)
      this.description?.setValue(this.good.description)
    })
  }

  get propertyName() {
    return this.descForm.get("propertyName");
  }
  get description() {
    return this.descForm.get("description");
  }
  public onChangeText({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    this.descriptionBien = data;
    this.description?.setValue(this.descriptionBien);
  }

  formSubmit() {
    console.log({
      propertyName: this.propertyName?.value,
      description: this.descriptionBien
    })
    this.store.dispatch(BailleurdbActions.description({
      propertyName: this.propertyName?.value,
      description: this.descriptionBien
    }))
    this.router.navigate(['/dashboard/bailleur/add-good/media'])
  }

}
