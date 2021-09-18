import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('openModal', [
    state('out', style({ transform: 'translateY(1rem),scale(.9)', opacity: 0 })),
    state('in', style({ transform: 'translateY(0),scale(1)', opacity: 1 })),
    transition('false <=> true', animate(300))
  ]),
  trigger('backgroundSwitch', [
    state('out', style({ opacity: 0 })),
    state('in', style({ opacity: 1 })),
    transition('false <=> true', animate(300))
  ])]
})
export class DisponibilityComponent implements OnInit {
  dates: moment.Moment[] = []
  /* @ts-ignore */
  datesAndHours: { date: moment.Moment, hour: string }[] = [];
  selectedDate: any;
  selectedHour: any;
  constructor(private store: Store<bailleurDashboardState>, private _adapter: DateAdapter<any>) { }
  timePickerModalShow: string = 'out';
  backgroundSwitch: string = 'out';
  ngOnInit(): void {
    this._adapter.setLocale('fr');
  }


  select(event: any, calendar: any) {
    this.backgroundSwitch = 'in';
    this.timePickerModalShow = 'in';
    const date: moment.Moment = event;
    const indexHour = this.datesAndHours.findIndex(dateAndHour => (dateAndHour.date.format("dddd Do MMMM YYYY")) == date.format("dddd Do MMMM YYYY"));
    this.selectedHour = indexHour > -1 ? this.datesAndHours[indexHour].hour : null;
    console.log(this.selectedHour)
    this.selectedDate = date;
    const index = this.datesAndHours.map(dateAndHour => dateAndHour.date).findIndex(x => x.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY"));
    if (index < 0) this.datesAndHours.push({ date: date, hour: '' });
    else {
      //this.datesAndHours.splice(index, 1)
    };
    calendar.updateTodaysDate();
  }
  dateClass() {
    return (date: any): MatCalendarCellCssClasses => {
      return (this.datesAndHours.find(x => (x.date.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY") || (x.date.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY") && this.selectedHour == x.hour)))) ? "selected" : '';

    };
  }
  pickDisponibily() {
    this.backgroundSwitch = 'out';
    this.timePickerModalShow = 'out';
    console.log(this.selectedDate.format("dddd Do MMMM YYYY"))
    const index = this.datesAndHours.findIndex(dateAndHour => dateAndHour.date.format("dddd Do MMMM YYYY") == this.selectedDate.format("dddd Do MMMM YYYY"));
    index > -1 ? this.datesAndHours[index].hour = this.selectedHour : false;
    this.selectedHour = null;
  }
  timeChanged(event: any) {
    this.selectedHour = event;
  }

}
