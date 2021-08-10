import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/steps/about/about.component';
import { ActivityComponent } from './pages/steps/activity/activity.component';
import { RecouvrementComponent } from './pages/steps/recouvrement/recouvrement.component';
import { PropertyComponent } from './pages/steps/property/property.component';
import { AddressComponent } from './pages/steps/address/address.component';
import { AnotherComponent } from './pages/steps/another/another.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, RegisterComponent, AboutComponent, ActivityComponent, RecouvrementComponent, PropertyComponent, AddressComponent, AnotherComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
	    	FormsModule,  ]
})
export class RegisterModule { }
