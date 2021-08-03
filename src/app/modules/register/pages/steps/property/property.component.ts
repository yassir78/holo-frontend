import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToRecouvrement(){
   this.router.navigate(['/register/recouvrement'])
  }

  returnToAnother(){
 this.router.navigate(['/register/another'])
  }
}
