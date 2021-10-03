import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LoginActions from "./login.actions"
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { EMPTY, from, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { GoogleAuthDto } from "src/app/models/dtos/googleAuthDto";
import { CookieService } from 'ngx-cookie-service';

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
                    map((token) => {
                        token.user.roles.includes("LOCATAIRE") ? this.router.navigate(['/dashboard/locataire/goods/home']) : this.router.navigate(['/dashboard/bailleur/mygoods']);
                        return LoginActions.loginSuccess({ token: token.token })
                    }),
                    catchError((response: HttpErrorResponse) => {
                        return of(LoginActions.loginFailure({ error: response.message }));
                    })
                )

            )
        )
    })
    loginWithGoogle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginActions.loginWithGoogle),
            mergeMap(action => from(this.authService.loginWithGoogle())
                .pipe(
                    tap(console.log),
                    map((user) => {
                        const googleAuthDto: GoogleAuthDto = {} as GoogleAuthDto;
                        /* @ts-ignore */
                        googleAuthDto.token = user.$b.access_token;
                        /* @ts-ignore */
                        console.log(user.$b.access_token)
                        /* @ts-ignore */
                        googleAuthDto.profil = this.authService.getGoogleUserDetails();
                        this.authService.persistLoggedUserWithGoogle(googleAuthDto).subscribe((res: any) => {
                            const accessToken = res.accessToken;
                            const refreshToken = res.refreshToken;
                            this.localStorageService.set("accessToken", accessToken);
                            this.localStorageService.set("refreshToken", refreshToken);
                            this.router.navigate(['/dashboard/locataire/goods/home']);
                        })
                        return LoginActions.loginWithGoogleSuccess()
                    }),
                    catchError((response: HttpErrorResponse) => {
                        return of(LoginActions.loginFailure({ error: response.message }));
                    })
                )

            )
        )
    })

    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private cookieService: CookieService,
        private localStorageService: LocalStorageService) { }

}