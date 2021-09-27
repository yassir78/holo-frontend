import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LoginActions from "./login.actions"
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class LoginEffects {
    login$ = createEffect(() => {
        const helper = new JwtHelperService();
        return this.actions$.pipe(
            ofType(LoginActions.login),
            mergeMap(action => this.authService.login(action.email, action.password)
                .pipe(
                    tap(console.log),
                    map((token) =>{
                        token.user.roles.includes("LOCATAIRE")? this.router.navigate(['/dashboard/locataire/goods/home']): this.router.navigate(['/dashboard/bailleur/mygoods']);
                        return LoginActions.loginSuccess({ token: token.token })
                    }),
                    catchError((response: HttpErrorResponse) => {
                        return of(LoginActions.loginFailure({ error: response.message }));
                    })
                )

            )
        )
    })
    constructor(private actions$: Actions, private authService: AuthService, private router:Router) { }
 
}