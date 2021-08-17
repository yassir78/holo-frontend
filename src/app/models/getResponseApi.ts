import { CampainFieldValueGetResponseApi } from "./CampaignGetResponseApi";
import { CustomFieldValueGetResponseApi } from "./customFieldValuesGetResponseApi";

export interface GetResponseApi {
    name: string;
    email: string;
    customFieldValues: CustomFieldValueGetResponseApi[];
    campaign: CampainFieldValueGetResponseApi;
}