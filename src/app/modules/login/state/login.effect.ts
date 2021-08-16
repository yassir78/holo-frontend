import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LoginActions from "./login.actions"
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginEffects {
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginActions.login),
            mergeMap(action => this.authService.login(action.username, action.password)
                .pipe(
                    tap(console.log),
                    map((token) => LoginActions.loginSuccess({ token: token.token })),
                    catchError((response: HttpErrorResponse) => {
                        const errorStatus = response.status;
                        console.log(`this is the status of the error ${errorStatus}`)
                        console.log(response.status)
                        return of(LoginActions.loginFalure({ error: response.message }));
                    })
                )

            )
        )
    })
    constructor(private actions$: Actions, private authService: AuthService) { }

}