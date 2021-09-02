import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LocataireComponent } from './locataire/locataire.component';
import { SharedModule } from '../shared/shared.module';
import { BailleurComponent } from './bailleur/bailleur.component';


@NgModule({
  declarations: [
    LocataireComponent,
    BailleurComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }