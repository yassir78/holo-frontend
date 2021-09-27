import { LOCALE_ID, NgModule } from '@angular/core';
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
import { SplitPipe } from '../../shared/pipes/split.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    LocataireHomeComponent,
  ],
  imports: [
    CommonModule,
    LocataireRoutingModule,
    LazyLoadImageModule,
    SharedModule,
    StoreModule.forFeature(
      "goods", goodsReducer
    ),
    EffectsModule.forFeature([LocataireDBEffect]),

  ],
  providers: [GoodService, GoodsResolver, { provide: LOCALE_ID, useValue: 'fr' }]
})
export class LocataireModule { }
