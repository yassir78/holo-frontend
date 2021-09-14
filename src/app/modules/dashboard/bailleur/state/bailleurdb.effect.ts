import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as BailleurdbActions from "./bailleurdb.action"
import { TextractService } from "src/app/services/textract.service";
import { GoodService } from "src/app/services/good.service";

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
    constructor(private actions$: Actions, private goodService:GoodService) { }
 
}