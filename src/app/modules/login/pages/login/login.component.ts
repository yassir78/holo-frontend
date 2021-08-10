import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginState } from '../../state/login.state';
import * as LoginActions from "../../state/login.actions"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private store:Store<loginState>) { }

  ngOnInit(): void {
  }
  login(){
    this.store.dispatch(LoginActions.login({username:"salim",password:"azerty"}))
  }
}
