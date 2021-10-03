import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Login Component] Login',
    props<{ email: string, password: string }>()
)
export const loginSuccess = createAction(
    '[Login Effect] Login Success',
    props<{ token: string }>()
);
export const loginFailure = createAction(
    '[Login Effect] Login Failure',
    props<{ error: string }>()
);
export const loginWithGoogle = createAction(
    '[Login Component] Login With Google'
);
export const loginWithGoogleSuccess = createAction(
    '[Login effect] Login With Google Success'
);
