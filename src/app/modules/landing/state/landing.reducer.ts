import { createReducer, on } from "@ngrx/store";
import { initialLandingState } from "./landing.state";
import * as LandingActions from "./landing.actions"

export const landingReducer = createReducer(
    initialLandingState,
    on(LandingActions.createContactSuccess, (state) => {
        return { ...state, success: true }
    }),
    on(LandingActions.createContactFailure, (state, action) => {
        return { ...state, success: false, errorMessage: action.error }
    })
)