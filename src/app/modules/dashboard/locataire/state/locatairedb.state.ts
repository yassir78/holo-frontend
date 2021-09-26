import { Bailleur } from "src/app/models/bailleur";
import { Role } from "src/app/models/enums/role";
import { Good } from "src/app/models/good";

export interface locataireDashboardState {
    goods: Good[];
    isLoading: boolean;
    error: string;
}
export const initialLocataireDashboardState: locataireDashboardState = {
    goods: [],
    isLoading: false,
    error: '', 
};