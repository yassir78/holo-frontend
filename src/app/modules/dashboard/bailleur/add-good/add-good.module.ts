import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGoodRoutingModule } from './add-good-routing.module';
import { AddGoodHomeComponent } from './add-good-home/add-good-home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { VerticalStepComponent } from './components/vertical-step/vertical-step.component';
import { InformationComponent } from './information/information.component';
import { HorizontalStepComponent } from './components/horizontal-step/horizontal-step.component';
import { DetailsComponent } from './details/details.component';
import { PriceComponent } from './price/price.component';
import { DescriptionComponent } from './description/description.component';
import { MediaComponent } from './media/media.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { PostComponent } from './post/post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddGoodHomeComponent,
    VerticalStepComponent,
    InformationComponent,
    HorizontalStepComponent,
    DetailsComponent,
    PriceComponent,
    DescriptionComponent,
    MediaComponent,
    DisponibilityComponent,
    PostComponent
  ],
  imports: [
    CKEditorModule,
    CommonModule,
    AddGoodRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class AddGoodModule { }
