import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RemetteurRegisterState } from "./remetteur.state";

const getRemetteurRegisterState = createFeatureSelector<RemetteurRegisterState>("remetteur");
export const getUser = createSelector(getRemetteurRegisterState, (state) => {
    return state.user;
})