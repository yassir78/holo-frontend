import { Component, OnInit } from '@angular/core';
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

  constructor() {

  }
  public onChangeText({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data)
    this.descriptionBien = data;
  }
  ngOnInit(): void {
  }

}
