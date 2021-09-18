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
import { StoreModule } from '@ngrx/store';
import { addGoodReducer } from '../state/bailleurdb.reducer';
import { BailleurDBEffect } from '../state/bailleurdb.effect';
import { EffectsModule } from '@ngrx/effects';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
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
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    StoreModule.forFeature(
      "good", addGoodReducer
    ),
    EffectsModule.forFeature([BailleurDBEffect]),

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddGoodModule { }
