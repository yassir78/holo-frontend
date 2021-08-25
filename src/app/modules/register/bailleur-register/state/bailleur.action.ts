import { createAction, props } from "@ngrx/store";


export const about = createAction(
    '[About component] add about section info to state',
    props<{
        gender: string,
        firstName: string,
        lastName: string,
        birth: Date,
        locality: string,
        address: string,
        domiciledSince: Date,
        maritalStatus: string,
        phoneNumber: string,
        email: string
    }>()
)