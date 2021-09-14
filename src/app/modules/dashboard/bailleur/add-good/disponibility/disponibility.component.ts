import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.scss']
})
export class DisponibilityComponent implements OnInit {

  constructor(private store: Store<bailleurDashboardState>) { }

  ngOnInit(): void {
  }

}
