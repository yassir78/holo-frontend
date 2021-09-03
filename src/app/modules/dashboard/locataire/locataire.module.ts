import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocataireRoutingModule } from './locataire-routing.module';
import { MygoodsComponent } from './mygoods/mygoods.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MygoodsComponent
  ],
  imports: [
    CommonModule,
    LocataireRoutingModule,
    SharedModule
  ]
})
export class LocataireModule { }
