import { createReducer, on } from "@ngrx/store";
import { initialLoginState } from "./login.state";
import * as LoginActions from "./login.actions"
export const loginReducer = createReducer(
    initialLoginState,
    on(LoginActions.loginSuccess,(state,action)=>{
        return {...state,isAuthenticated:true,token:action.token}
    }),
    on(LoginActions.loginFalure,(state,action)=>{
        return {...state,isAuthenticated:false,errorMessage:action.error}
    })
)