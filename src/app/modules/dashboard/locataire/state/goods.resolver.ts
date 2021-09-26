
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { locataireDashboardState } from './locatairedb.state';
import { areGoodsLoaded } from './locatairedb.selector';
import { getAllGoods, getAllGoodsSuccess } from './locatairedb.action';

@Injectable()
export class GoodsResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<locataireDashboardState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areGoodsLoaded),
        tap((goodsLoaded) => {
          this.store.dispatch(getAllGoods());

        }),
        filter(goodsLoaded => goodsLoaded),
        first()
      );
  }
}