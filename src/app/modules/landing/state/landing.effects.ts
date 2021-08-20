import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as LandingActions from "./landing.actions"
import { GetResponseApiService } from "src/app/services/get-response-api.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LandingEffect {
    landing$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LandingActions.createContact),
            mergeMap(action => this.getResponseApiService.saveContact({ firstName: action.nom, lastName: action.prenom, email: action.email, phone: action.telephone })
                .pipe(
                    tap(console.log),
                    map((response) => response.result == "success" ? LandingActions.createContactSuccess() : LandingActions.createContactFailure({ error: response.msg })),
                )

            )
        )
    })
    constructor(private actions$: Actions, private getResponseApiService: GetResponseApiService) { }

}