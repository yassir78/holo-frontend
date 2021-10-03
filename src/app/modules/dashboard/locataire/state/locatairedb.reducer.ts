import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { Good } from "src/app/models/good";
import * as LocatairedbActions from "./locatairedb.action";
import { initialLocataireDashboardState } from "./locatairedb.state";

export const goodsReducer = createReducer(
    initialLocataireDashboardState,

    on(LocatairedbActions.getAllGoodsSuccess, (state, action) => {
        return { ...state, goods: action.goods, isLoading: true }
    }),
    on(LocatairedbActions.getAllGoodsFailure, (state, action) => {
        return { ...state, isLoading: true, error: action.error }
    }),
    on(LocatairedbActions.selectGood, (state, action) => {
        return { ...state, selectedGood: action.good }
    }),
    on(LocatairedbActions.getLoggedLocataireInfoSuccess, (state, action) => {
        return { ...state, loggedLocataire: action.locataire }
    }),
    on(LocatairedbActions.getLoggedLocataireInfoFailure, (state, action) => {
        return { ...state, error: action.error }
    })

)