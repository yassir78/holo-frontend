import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RemetteurComponent } from './remetteur/remetteur.component';
import { LocataireComponent } from './locataire/locataire.component';


@NgModule({
  declarations: [
    RemetteurComponent,
    LocataireComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
