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
            mergeMap(action => this.getResponseApiService.saveContact({ name: `${action.nom} ${action.prenom}`, email: action.email, customFieldValues: [{ customFieldId: environment.customFieldId, value: [action.telephone] }], campaign: { campaignId: environment.campainId } })
                .pipe(
                    tap(console.log),
                    map((response) => LandingActions.createContactSuccess({ success: true })),
                    catchError((response) => {
                        console.log(response)
                        return of(LandingActions.createContactFailure({ error: response.message }));
                    })
                )

            )
        )
    })
    constructor(private actions$: Actions, private getResponseApiService: GetResponseApiService) { }

}