import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Good } from 'src/app/models/good';
import { getGood } from '../../../state/bailleurdb.selector';
import { bailleurDashboardState } from '../../../state/bailleurdb.state';

@Component({
  selector: 'vertical-step',
  templateUrl: './vertical-step.component.html',
  styleUrls: ['./vertical-step.component.scss']
})
export class VerticalStepComponent implements OnInit {
  /* @ts-ignore */
  good$: Observable<Good>;
  good: Good = {};

  constructor(private store: Store<bailleurDashboardState>, public router: Router) { }

  ngOnInit(): void {
    this.good$ = this.store.select(getGood);

    this.good$.subscribe((good: Good) => {
      this.good = good;
    })
  }

}
