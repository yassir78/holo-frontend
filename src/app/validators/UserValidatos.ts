import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, delay, map, tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

export function existingEmailValidator(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return new Promise((resolve, reject) => {
            authService.
                findByEmail({ email: control.value })
                .pipe(
                    debounceTime(2000),
                )
                .subscribe(
                    (response: any) => (response?.user != null ? resolve({ unique: true }) : resolve(null))
                )

        });

    }
} 
