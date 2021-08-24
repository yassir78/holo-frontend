import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToProperty(){
   this.router.navigate(['/register/bailleur/property'])
  }

  returnToAddress(){
    this.router.navigate(['/register/bailleur/address'])
  }
}
