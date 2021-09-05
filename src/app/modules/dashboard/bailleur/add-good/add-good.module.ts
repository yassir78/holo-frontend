import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGoodRoutingModule } from './add-good-routing.module';
import { AddGoodHomeComponent } from './add-good-home/add-good-home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { VerticalStepComponent } from './components/vertical-step/vertical-step.component';
import { InformationComponent } from './information/information.component';
import { HorizontalStepComponent } from './components/horizontal-step/horizontal-step.component';


@NgModule({
  declarations: [
    AddGoodHomeComponent,
    VerticalStepComponent,
    InformationComponent,
    HorizontalStepComponent
  ],
  imports: [
    CommonModule,
    AddGoodRoutingModule,
    SharedModule
  ]
})
export class AddGoodModule { }
