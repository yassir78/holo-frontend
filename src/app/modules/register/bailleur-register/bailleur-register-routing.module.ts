import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailleurRegisterComponent } from './pages/bailleur-register/bailleur-register.component';
import { AboutComponent } from './pages/steps/about/about.component';
import { ActivityComponent } from './pages/steps/activity/activity.component';
import { AddressComponent } from './pages/steps/address/address.component';
import { AnotherComponent } from './pages/steps/another/another.component';
import { PropertyComponent } from './pages/steps/property/property.component';
import { RecouvrementComponent } from './pages/steps/recouvrement/recouvrement.component';

const routes: Routes = [
{
  path: '',
  component: BailleurRegisterComponent,
  children: [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'activity', component: ActivityComponent },
    { path: 'recouvrement', component: RecouvrementComponent },
    { path: 'another', component: AnotherComponent },
    { path: 'address', component: AddressComponent },
    { path: 'property', component: PropertyComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BailleurRegisterRoutingModule { }
