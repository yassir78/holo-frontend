import { User } from "src/app/models/user";

export interface bailleurRegisterState {
    user: User;
}
export const initialBailleurRegisterState: bailleurRegisterState = {
    user: {}
};