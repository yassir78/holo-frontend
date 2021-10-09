import { Bailleur } from "src/app/models/bailleur";
import { Role } from "src/app/models/enums/role";
import { Good } from "src/app/models/good";

export interface bailleurDashboardState {
    good: Good;
    isLoading: boolean;
    error: string;
    loggedBailleur: Bailleur;
}
export const initialBailleurDashboardState: bailleurDashboardState = {
    good: {},
    isLoading: false,
    error: '',
    loggedBailleur: {}

};