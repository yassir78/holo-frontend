import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public Editor = ClassicEditor;
  descriptionBien: string = "<p style='color:red'>Description de votre bien . . .</p>";
  descForm: FormGroup = new FormGroup({
    propertyName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)

  })
  constructor() {

  }
  ngOnInit(): void {
  }

  get propertyName(){
   return this.descForm.get("propertyName");
  }
  get description(){
    return this.descForm.get("description");
   }
  public onChangeText({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    this.descriptionBien = data;
    this.description?.setValue(this.descriptionBien);
  }

  formSubmit(){
    console.log({
      propertyName: this.propertyName?.value,
      description: this.descriptionBien
    })
  }

}
