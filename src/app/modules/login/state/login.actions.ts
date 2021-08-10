import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Login Component] Login',
    props<{username:string,password:string}>()
)
export const loginSuccess = createAction(
    '[Login Effect] Login Success',
    props<{token:string}>()
);
export const loginFalure = createAction(
    '[Login Effect] Login Failure',
    props<{error:string}>()
);