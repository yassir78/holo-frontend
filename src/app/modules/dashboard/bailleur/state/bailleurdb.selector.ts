import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bailleurDashboardState } from "./bailleurdb.state";

const getBailleurDashboardState = createFeatureSelector<bailleurDashboardState>("good");


export const getGood = createSelector(getBailleurDashboardState, (state) => {
    return state.good;
})
