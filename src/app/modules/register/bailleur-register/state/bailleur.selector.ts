import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bailleurRegisterState } from "./bailleur.state";

const getBailleurRegisterState = createFeatureSelector<bailleurRegisterState>("bailleur");

export const getpayslipProcessEndedSuccessfuly = createSelector(getBailleurRegisterState, (state) => {
    return state.payslipProcessEndedSuccessfuly;
});

export const getNet = createSelector(getBailleurRegisterState, (state) => {
    return state.net;
});
export const getUser = createSelector(getBailleurRegisterState, (state) => {
    return state.user;
})
export const getGross = createSelector(getBailleurRegisterState, (state) => {
    return state.gross;
});
export const getpayslipProcessErrorMsg = createSelector(getBailleurRegisterState, (state) => {
    return state.payslipProcessErrorMsg;
});
export const getpayslipProcessLoading = createSelector(getBailleurRegisterState, (state) => {
    return state.payslipProcessLoading;
});