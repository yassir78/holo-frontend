import { initialRemetteurRegisterState } from "./remetteur.state";
import { createReducer, on } from "@ngrx/store";
import * as RemetteurActions from "./remetteur.action";
export const remetteurReducer = createReducer(
    initialRemetteurRegisterState,
    on(RemetteurActions.register, (state, action) => {
        return {
            ...state, user: { ...state.user, profileImage: action.profileImage, firstName: action.firstName, lastName: action.lastName, gender: action.gender, birth: action.birth,   phoneNumber: action.phoneNumber, email: action.email }
        }})
)