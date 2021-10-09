import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, delay } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as BailleurdbActions from "./bailleurdb.action"
import { TextractService } from "src/app/services/textract.service";
import { GoodService } from "src/app/services/good.service";
import { Bailleur } from "src/app/models/bailleur";

@Injectable({
    providedIn: 'root'
})
export class BailleurDBEffect {

    addGoodEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BailleurdbActions.addGood),
            mergeMap((action) => this.goodService.addGood(action.good)
                .pipe(
                    tap(console.log),
                    map(data => BailleurdbActions.addGoodSuccess()),
                    catchError((response: HttpErrorResponse) => {
                        return of(BailleurdbActions.addGoodFailure({ error: response.message }));
                    })
                )
            )
        )
    })
    getLoggedLocataireInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BailleurdbActions.getLoggedBailleurInfo),
            mergeMap(() => this.authService.findByEmailPayload()
                .pipe(
                    tap(console.log),
                    delay(1000),
                    map((user: Bailleur) => BailleurdbActions.getLoggedBailleurInfoSuccess({ bailleur: user })),
                    catchError((response: HttpErrorResponse) => {
                        return of(BailleurdbActions.getLoggedBailleurInfoFailure({ error: response.message }));
                    })
                )
            )
        )
    })
    constructor(private actions$: Actions, private goodService: GoodService, private authService: AuthService) { }

}