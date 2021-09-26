import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Good } from 'src/app/models/good';
import { selectGood } from '../state/locatairedb.action';
import { getGoods } from '../state/locatairedb.selector';
import { locataireDashboardState } from '../state/locatairedb.state';
@Component({
  selector: 'locataire-home',
  templateUrl: './locataire-home.component.html',
  styleUrls: ['./locataire-home.component.scss']
})
export class LocataireHomeComponent implements OnInit {

  /* @ts-ignore */
  goods$: Observable<Good[]>;
  goods: Good[] = [];
  constructor(private store: Store<locataireDashboardState>, private router: Router) { }

  ngOnInit(): void {

    this.goods$ = this.store.select(getGoods);
    this.goods$.subscribe((goods: Good[]) => {
      this.goods = goods;
      console.log(this.goods[0])
    });
  }
  goodDetails(good: Good) {
    this.store.dispatch(selectGood({ good: good }));
    this.router.navigate(['dashboard/locataire/goods/good-details'])
  }

}
