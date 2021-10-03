import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { locataireDashboardState } from './state/locatairedb.state';
import { getLoggedInLocaitaire } from './state/locatairedb.selector';
import { Remetteur } from 'src/app/models/remetteur';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.scss']
})
export class LocataireComponent implements OnInit {
  /* @ts-ignore */
  loggedLocatiare$: Observable<Remetteur>;
  constructor(private store: Store<locataireDashboardState>) { }

  ngOnInit(): void {
    this.loggedLocatiare$ = this.store.select(getLoggedInLocaitaire);
    this.loggedLocatiare$.subscribe(user => {
      console.log(user);
    })

  }

}
