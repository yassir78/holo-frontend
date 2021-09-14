import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  /* @ts-ignore */
  @Input() width: Observable<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
