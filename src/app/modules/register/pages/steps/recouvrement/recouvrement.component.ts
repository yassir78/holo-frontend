import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recouvrement',
  templateUrl: './recouvrement.component.html',
  styleUrls: ['./recouvrement.component.scss']
})
export class RecouvrementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  returnToProperty(){
   this.router.navigate(['/register/property'])
  }
}
