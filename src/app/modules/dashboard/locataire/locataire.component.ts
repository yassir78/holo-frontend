import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { locataireDashboardState } from './state/locatairedb.state';
import * as LocatairedbActions from "./state/locatairedb.action";
import { getGoods } from './state/locatairedb.selector';
import { Good } from 'src/app/models/good';
@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.scss']
})
export class LocataireComponent implements OnInit {
     /* @ts-ignore */
  goods$: Observable<Good[]>;
  goods: Good[] = [];
  constructor(private store: Store<locataireDashboardState>) { }

  ngOnInit(): void {

    this.goods$ = this.store.select(getGoods);
    this.goods$.subscribe((goods: Good[]) => {
      this.goods = goods;
      console.log(this.goods[0])
    });
  }

}
