import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as RemetteurActions from "./remetteur.action"

@Injectable({
    providedIn: 'root'
})
export class RemetteurEffect {

    constructor(private actions$: Actions, private authService: AuthService) { }

    registerEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(RemetteurActions.remetteurRegister),
            mergeMap((action) => this.authService.register(action.user)
                .pipe(
                    tap(console.log),
                    map(data => RemetteurActions.registerSuccess()),
                    catchError((response: HttpErrorResponse) => {
                        return of(RemetteurActions.registerFailure({ error: response.message }));
                    })
                )
            )
        )
    })
  
}