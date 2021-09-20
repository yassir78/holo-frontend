import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BailleurdbActions from "../../state/bailleurdb.action";
import { bailleurDashboardState } from '../../state/bailleurdb.state';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
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
  datesAndHours: DateAndHours[] = [];
  /* @ts-ignore */
  @ViewChild('modal') modal: ElementRef;
  /* @ts-ignore */
  @ViewChild('calendar') calendar: ElementRef;

  selectedDate: any;
  selectedStartHour: any;
  selectedFinishHour: any;
  constructor(private store: Store<bailleurDashboardState>, private _adapter: DateAdapter<any>, private router:Router) { }
  timePickerModalShow: string = 'out';
  backgroundSwitch: string = 'out';
  ngOnInit(): void {
    this._adapter.setLocale('fr');
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    console.log("host listenner")
    if (!this.modal?.nativeElement?.contains(event.target)) {
      console.log("click")
      this.backgroundSwitch = 'out';
      this.timePickerModalShow = 'out';
      if (!this.selectedStartHour && !this.selectedFinishHour)
        this.datesAndHours = this.datesAndHours.filter(dateAndHour => dateAndHour.date != this.selectedDate)
      /* @ts-ignore */
      this.calendar.updateTodaysDate()
    }
  }
  select(event: any, calendar: any) {
    this.backgroundSwitch = 'in';
    this.timePickerModalShow = 'in';
    const date: moment.Moment = event;
    const indexHour = this.datesAndHours.findIndex(dateAndHour => (dateAndHour.date.format("dddd Do MMMM YYYY")) == date.format("dddd Do MMMM YYYY"));
    this.selectedStartHour = indexHour > -1 ? this.datesAndHours[indexHour].startHour : null;
    this.selectedFinishHour = indexHour > -1 ? this.datesAndHours[indexHour].finishHour : null;
    console.log(this.selectedStartHour)
    this.selectedDate = date;
    const index = this.datesAndHours.map(dateAndHour => dateAndHour.date).findIndex(x => x.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY"));
    if (index < 0) this.datesAndHours.push({ date: date, startHour: '', finishHour: '' });
    else {
      //this.datesAndHours.splice(index, 1)
    };
    calendar.updateTodaysDate();
  }
  dateClass() {
    return (date: any): MatCalendarCellCssClasses => {
      return (this.datesAndHours.find(x => (x.date.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY") || (x.date.format("dddd Do MMMM YYYY") == date.format("dddd Do MMMM YYYY") && this.selectedStartHour == x.startHour)))) ? "selected" : '';
    };
  }
  pickDisponibily() {
    this.backgroundSwitch = 'out';
    this.timePickerModalShow = 'out';
    console.log(this.selectedDate.format("dddd Do MMMM YYYY"))
    const index = this.datesAndHours.findIndex(dateAndHour => dateAndHour.date.format("dddd Do MMMM YYYY") == this.selectedDate.format("dddd Do MMMM YYYY"));
    if (index > -1) {
      this.datesAndHours[index].startHour = this.selectedStartHour;
      this.datesAndHours[index].finishHour = this.selectedFinishHour;
    }
    this.selectedStartHour = null;
  }
  startTimeChanged(event: any) {
    this.selectedStartHour = event;
  }
  finishTimeChanged(event: any) {
    this.selectedFinishHour = event;
  }
  submit(){
    console.log( "In submit ")  
    if(this.datesAndHours?.length != 0){
      this.store.dispatch(BailleurdbActions.disponibility({
        availabilityOfVisit: this.datesAndHours.map(dateAndHour=>{
          return{ 
            date: dateAndHour.date.format("dddd Do MMMM YYYY"),
            startHour: dateAndHour.startHour, 
            finishHour: dateAndHour.finishHour
          }
        })
      }))
      this.router.navigate(['/dashboard/bailleur/add-good/post'])

    }
   

  }
}
