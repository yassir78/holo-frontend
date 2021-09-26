import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { Good } from "src/app/models/good";
import * as LocatairedbActions from "./locatairedb.action";
import { initialLocataireDashboardState } from "./locatairedb.state";

export const goodsReducer = createReducer(
    initialLocataireDashboardState,
  
    on(LocatairedbActions.getAllGoodsSuccess, (state, action) => {
        return { ...state,  goods: action.goods, isLoading: true }
    }),
    on(LocatairedbActions.getAllGoodsFailure, (state, action) => {
        return { ...state, isLoading: true, error: action.error }
    }),

)