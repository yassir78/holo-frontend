import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BailleurRegisterRoutingModule } from './bailleur-register-routing.module';
import { BailleurRegisterComponent } from './pages/bailleur-register/bailleur-register.component';
import { AboutComponent } from './pages/steps/about/about.component';
import { ActivityComponent } from './pages/steps/activity/activity.component';
import { RecouvrementComponent } from './pages/steps/recouvrement/recouvrement.component';
import { PropertyComponent } from './pages/steps/property/property.component';
import { AddressComponent } from './pages/steps/address/address.component';
import { AnotherComponent } from './pages/steps/another/another.component';


@NgModule({
  declarations: [
    BailleurRegisterComponent,
    AboutComponent, ActivityComponent, RecouvrementComponent, PropertyComponent, AddressComponent, AnotherComponent
  ],
  imports: [
    CommonModule,
    BailleurRegisterRoutingModule
  ]
})
export class BailleurRegisterModule { }
