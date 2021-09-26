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
  constructor() { }

  ngOnInit(): void {
  }

}
