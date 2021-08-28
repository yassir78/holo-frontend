import { Bailleur } from "src/app/models/bailleur";

export interface bailleurRegisterState {
    user: Bailleur;
    payslipProcessLoading: boolean;
    payslipProcessErrorMsg: string;
    payslipProcessEndedSuccessfuly: boolean;
    gross: number;
    net: number;
}
export const initialBailleurRegisterState: bailleurRegisterState = {
    user: { },
    gross: 0,
    net: 0,
    payslipProcessLoading: false,
    payslipProcessErrorMsg: '',
    payslipProcessEndedSuccessfuly: false
};