import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bailleur } from 'src/app/models/bailleur';
import { getLoggedLocataireInfo } from '../locataire/state/locatairedb.action';
import { getLoggedInBailleur } from './state/bailleurdb.selector';
import { bailleurDashboardState } from './state/bailleurdb.state';

@Component({
  selector: 'app-bailleur',
  templateUrl: './bailleur.component.html',
  styleUrls: ['./bailleur.component.scss']
})
export class BailleurComponent implements OnInit {
  /* @ts-ignore */
  loggedBailleur$: Observable<Bailleur>;
  /* @ts-ignore */
  loggedBailleur: Bailleur;
  constructor(private store: Store<bailleurDashboardState>) { }

  ngOnInit(): void {
    this.loggedBailleur$ = this.store.select(getLoggedInBailleur);
    this.store.dispatch(getLoggedLocataireInfo())
    this.loggedBailleur$.subscribe((user: Bailleur) => {
      this.loggedBailleur = user;
    })

  }


}
