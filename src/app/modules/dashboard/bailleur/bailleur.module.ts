import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BailleurRoutingModule } from './bailleur-routing.module';
import { ApplicationsComponent } from './applications/applications.component';
import { MygoodsComponent } from './mygoods/mygoods.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ApplicationDetailsResponsiveComponent } from './components/application-details-responsive/application-details-responsive.component';
import { AccordionComponent } from './components/application-details-responsive/accordion/accordion.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ApplicationsComponent,
    MygoodsComponent,
    ApplicationCardComponent,
    ApplicationDetailsComponent,
    ApplicationDetailsResponsiveComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    BailleurRoutingModule,
    SharedModule
  ]
})
export class BailleurModule { }
