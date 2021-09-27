import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginState } from '../../state/login.state';
import * as LoginActions from "../../state/login.actions"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private store: Store<loginState>, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get email() {
    return this.loginForm.get('email')?.value;
  }
  get password() {
    return this.loginForm.get('password')?.value;
  }
  ngOnInit(): void {
  }
  login() {
    this.store.dispatch(LoginActions.login({ email: this.email, password: this.password}))
  }
}
