import { Bailleur } from "src/app/models/bailleur";
import { User } from "src/app/models/user";

export interface bailleurRegisterState {
    user: Bailleur;
}
export const initialBailleurRegisterState: bailleurRegisterState = {
    user: {}
};