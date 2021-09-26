import { createFeatureSelector, createSelector } from "@ngrx/store";
import { locataireDashboardState } from "./locatairedb.state";

const getLocataireDashboardState = createFeatureSelector<locataireDashboardState>("goods");


export const getGoods = createSelector(getLocataireDashboardState, (state) => {
    return state.goods;
})
export const getLoading = createSelector(getLocataireDashboardState, (state) => {
    return state.isLoading;
})
export const getSelectedGood = createSelector(getLocataireDashboardState, (state) => {
    return state.selectedGood;
})
export const areGoodsLoaded = createSelector(getLocataireDashboardState, (state) => {
    return state.isLoading;
})
