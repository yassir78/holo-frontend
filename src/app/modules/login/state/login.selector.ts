import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loginState } from "./login.state";

const getLoginState = createFeatureSelector<loginState>("login");


export const getError = createSelector(getLoginState, (state) => {
    return state.errorMessage;
})