import { Remetteur } from "src/app/models/remetteur";

export interface RemetteurRegisterState {
    user: Remetteur;

}
export const initialRemetteurRegisterState: RemetteurRegisterState = {
    user: { },
};