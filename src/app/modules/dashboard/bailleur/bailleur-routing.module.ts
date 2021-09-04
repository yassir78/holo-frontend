import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { BailleurComponent } from './bailleur.component';
import { MygoodsComponent } from './mygoods/mygoods.component';

const routes: Routes = [
  {
    path: '',
    component: BailleurComponent,
    children: [
      {
        path: 'mygoods',
        component: MygoodsComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      { path: '', redirectTo: 'mygoods' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BailleurRoutingModule { }
