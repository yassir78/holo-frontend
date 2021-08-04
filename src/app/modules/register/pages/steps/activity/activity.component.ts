import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToAddress(){
   this.router.navigate(['/register/address'])
  }

  returnToAbout(){
    this.router.navigate(['/register/about'])
  }
}
