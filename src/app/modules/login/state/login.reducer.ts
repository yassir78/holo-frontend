import { createReducer, on } from "@ngrx/store";
import { initialLoginState } from "./login.state";
import * as LoginActions from "./login.actions"
export const loginReducer = createReducer(
    initialLoginState,
    on(LoginActions.login, (state) => {
        return { ...state, loginLoading: true }
    }),
    on(LoginActions.loginSuccess, (state, action) => {
        return { ...state, isAuthenticated: true, token: action.token, loginLoading: false }
    }),
    on(LoginActions.loginFailure, (state, action) => {
        return { ...state, isAuthenticated: false, errorMessage: action.error, loginLoading: false }
    })
)