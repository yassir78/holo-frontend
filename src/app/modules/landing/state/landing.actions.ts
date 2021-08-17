import { createAction, props } from "@ngrx/store";

export const createContact = createAction(
    '[Landing Component] saveContact',
    props<{ nom:string,prenom:string,email:string,telephone:string }>()
)
export const createContactSuccess = createAction(
    '[Landing Effect] saveContact Success',
    props<{ success: boolean }>()
);
export const createContactFailure = createAction(
    '[Landing Effect] saveContact Failure',
    props<{ error: string }>()
);