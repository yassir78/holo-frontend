import { createAction, props } from "@ngrx/store";
export const register = createAction(
    '[Register component] add register section info to state',
    props<{
        gender: string,
        firstName: string,
        lastName: string,
        birth: Date,
        phoneNumber: string,
        profileImage: string,
        email: string
    }>()
)