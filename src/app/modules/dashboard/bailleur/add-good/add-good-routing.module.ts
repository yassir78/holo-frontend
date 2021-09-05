import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoodHomeComponent } from './add-good-home/add-good-home.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    component: AddGoodHomeComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent
      },
      { path: '', redirectTo: 'information' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGoodRoutingModule { }
