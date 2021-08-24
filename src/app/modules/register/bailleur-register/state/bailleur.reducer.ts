import { createReducer, on } from "@ngrx/store";
import { initialBailleurRegisterState } from "./bailleur.state";
import * as AboutActions from "./bailleur.action"
export const bailleurReducer = createReducer(
    initialBailleurRegisterState,
    on(AboutActions.about, (state, action) => {
        return {
            ...state, user: { ...state.user, firstName: action.firstName, lastName: action.lastName, gender: action.gender, birth: action.birth, locality: action.locality, simpleAddress: action.address, domiciledSince: action.domiciledSince, maritalStatus: action.maritalStatus, phoneNumber: action.phoneNumber, email: action.email }
        }
    })

)