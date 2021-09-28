import { createAction, props } from "@ngrx/store";
import { Role } from "aws-sdk/clients/budgets";
import { User } from "src/app/models/user";
export const register = createAction(
    '[Register component] add register section info to state',
    props<{
        gender: string,
        firstName: string,
        lastName: string,
        birth: Date,
        phoneNumber: string,
        profileImage: string,
        email: string,
        password: string,
        roles: string[];
    }>()
)


export const remetteurRegister = createAction(
    '[Activity component] register process',
    props<{ user: User }>()
)
export const registerSuccess = createAction(
    '[Remetteur effect] register process success'
)
export const registerFailure = createAction(
    '[Remetteur effect] register process failure',
    props<{ error: string }>()
)
