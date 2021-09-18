import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class DisponibilityComponent implements OnInit {
  dates: moment.Moment[] = []
  constructor(private store: Store<bailleurDashboardState>, private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this._adapter.setLocale('fr');
  }


  select(event: any, calendar: any) {
    const date: moment.Moment = event

    const index = this.dates.findIndex(x => x.isSame(date));
    if (index < 0) this.dates.push(date);
    else this.dates.splice(index, 1);

    calendar.updateTodaysDate();
  }
  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      return (this.dates.find(x => x.isSame(date))) ? "selected" : '';

    };
  }

}
