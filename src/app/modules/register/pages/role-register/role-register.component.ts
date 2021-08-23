import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.scss']
})
export class RoleRegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToMemberRegister(){
    this.router.navigate(['/register/membre'])
  }

  goToPropertyRegister(){
    this.router.navigate(['/register'])
  }

}
