import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginState } from '../../state/login.state';
import * as LoginActions from "../../state/login.actions"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { getError } from '../../state/login.selector';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalShow: string = 'out';
  backgroundSwitch: string = 'out';
  content: String = '';
  header: string = '';
  loginForm: FormGroup;
  passwordType = 'password';
  /* @ts-ignore */
  errorMessage$: Observable<String | null>;
  constructor(private store: Store<loginState>, private fb: FormBuilder, private authService: AuthService) {
    this.errorMessage$ = this.store.select(getError);
    this.errorMessage$.subscribe(errorMessage => {
      if (errorMessage) {
        this.modalShow = 'in',
          this.backgroundSwitch = 'in';
        this.content = errorMessage;
      }
    })
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
    this.store.dispatch(LoginActions.login({ email: this.email, password: this.password }))
  }
  signinWithGoogle() {
    console.log("google login")
    this.authService.loginWithGoogle();
  }
  continue() {
    this.loginForm.reset();
    this.backgroundSwitch = 'out';
    this.modalShow = 'out';
  }
  passwordHide() {
    this.passwordType == 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
    console.log(this.passwordType)
  }

}
