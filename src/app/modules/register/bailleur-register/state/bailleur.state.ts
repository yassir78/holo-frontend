import { Bailleur } from "src/app/models/bailleur";
import { Role } from "src/app/models/enums/role";

export interface bailleurRegisterState {
    user: Bailleur;
    payslipProcessLoading: boolean;
    payslipProcessErrorMsg: string;
    payslipProcessEndedSuccessfuly: boolean;
    gross: number;
    net: number;
    isLoading: boolean;
    error: string;
}
export const initialBailleurRegisterState: bailleurRegisterState = {
    user: { roles: [Role.BAILLEUR] },
    gross: 0,
    net: 0,
    payslipProcessLoading: false,
    payslipProcessErrorMsg: '',
    payslipProcessEndedSuccessfuly: false,
    isLoading: false,
    error: '',
};