import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as LocatairedbActions from "./locatairedb.action"
import { TextractService } from "src/app/services/textract.service";
import { GoodService } from "src/app/services/good.service";

@Injectable({
    providedIn: 'root'
})
export class LocataireDBEffect {

    addGoodEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocatairedbActions.getAllGoods),
            mergeMap((action) => this.goodService.findAll()
                .pipe(
                    tap(console.log),
                    map(goods => LocatairedbActions.getAllGoodsSuccess({goods})),
                    catchError((response: HttpErrorResponse) => {
                        return of(LocatairedbActions.getAllGoodsFailure({ error: response.message }));
                    })
                )
            )
        )
    })
    constructor(private actions$: Actions, private goodService:GoodService) { }
 
}