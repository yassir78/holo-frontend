import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";
import * as BailleurActions from "./bailleur.action"
import { TextractService } from "src/app/services/textract.service";

@Injectable({
    providedIn: 'root'
})
export class BailleurEffect {
    /*     payslipProcess = createEffect(() => {
            return this.actions$.pipe(
                ofType(BailleurActions.processPayslip),
                mergeMap(action => this.textractSerivce.analyseDocument(action.buffer)
                    .pipe(
                        tap(console.log),
                        map(data => {
                            const montantBrut = this.textractSerivce.getMontantBrut(data);
                            const montantNet = this.textractSerivce.getMontantNet(data);
                            if (montantBrut == null || montantNet == null) {
                                BailleurActions.processPayslipFailure({ errorMsg: "Erreur dans le document" })
                            } else {
                                BailleurActions.processPayslipSuccess({ montantBrut: montantBrut, montantNet: montantNet })
                            }
                        }),
                              catchError((response: HttpErrorResponse) => {
                                  return of(BailleurActions.processPayslipFailure({ errorMsg: "Erreur serveur" })
                                  );
                              }) 
                    )
                )
    
            )
        }); */
    payslipProcess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BailleurActions.processPayslipServer),
            mergeMap((action) => this.textractSerivce.analyseDocument(action.buffer)
                .pipe(
                    map(data => this.processing(data))
                )

            )
        );
    })

    constructor(private actions$: Actions, private textractSerivce: TextractService) { }
    processing(data: any) {
        const montantBrut = this.textractSerivce.getMontantBrut(data);
        const montantNet = this.textractSerivce.getMontantNet(data);
        if (montantBrut == null || montantNet == null) {
            console.log("this is me")
            return BailleurActions.processPayslipFailure({ errorMsg: "Erreur dans le document" })
        } else {
            console.log("this is him")
            console.log({ montantBrut: montantBrut, montantNet: montantNet })
            return BailleurActions.processPayslipSuccess({ montantBrut: montantBrut, montantNet: montantNet })
        }
    }
}