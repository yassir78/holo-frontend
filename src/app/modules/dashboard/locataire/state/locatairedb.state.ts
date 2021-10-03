import { Bailleur } from "src/app/models/bailleur";
import { Role } from "src/app/models/enums/role";
import { Good } from "src/app/models/good";
import { Remetteur } from "src/app/models/remetteur";

export interface locataireDashboardState {
    goods: Good[];
    selectedGood: Good;
    isLoading: boolean;
    error: string;
    loggedLocataire: Remetteur
}
export const initialLocataireDashboardState: locataireDashboardState = {
    goods: [],
    isLoading: false,
    error: '', 
    selectedGood: {},
    loggedLocataire: {}

};