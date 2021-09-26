import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Good } from 'src/app/models/good';
import { getAllGoods, selectGood } from '../state/locatairedb.action';
import { getGoods, getLoading } from '../state/locatairedb.selector';
import { locataireDashboardState } from '../state/locatairedb.state';
@Component({
  selector: 'locataire-home',
  templateUrl: './locataire-home.component.html',
  styleUrls: ['./locataire-home.component.scss']
})
export class LocataireHomeComponent implements OnInit {

  /* @ts-ignore */
  goods$: Observable<Good[]>;
  /* @ts-ignore */
  loading$: Observable<boolean>;
  constructor(private store: Store<locataireDashboardState>, private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(getLoading);
    this.goods$ = this.store.select(getGoods);
    this.store.dispatch(getAllGoods());
  }
  goodDetails(good: Good) {
    this.store.dispatch(selectGood({ good: good }));
    this.router.navigate(['dashboard/locataire/goods/good-details'])
  }

}
