import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocataireRoutingModule } from './locataire-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GoodService } from 'src/app/services/good.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { goodsReducer } from './state/locatairedb.reducer';
import { LocataireDBEffect } from './state/locatairedb.effect';
import { GoodsResolver } from './state/goods.resolver';
import { LocataireHomeComponent } from './locataire-home/locataire-home.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    LocataireHomeComponent,
  ],
  imports: [
    CommonModule,
    LocataireRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      "goods", goodsReducer
    ),
    EffectsModule.forFeature([LocataireDBEffect]),

  ],
  providers: [GoodService, GoodsResolver]
})
export class LocataireModule { }
