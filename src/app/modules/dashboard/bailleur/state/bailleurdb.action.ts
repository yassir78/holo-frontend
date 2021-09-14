import { createAction, props } from "@ngrx/store";
import { ModifyInstanceAttributeRequest } from "aws-sdk/clients/ec2";
import { Good } from "src/app/models/good";
import { Payslip } from "src/app/models/payslip";
import { User } from "src/app/models/user";


export const good = createAction(
    '[Add Good components] add good infos to state',
    props<{
        status: string;
        agencyName: string;
        agencyForm: string;
        propertyType: string;
        availablity: Date;
        state: string;
        zipCode: string;
        address: string;
        livingSpace: number;
        terraceArea: number;
        gardenArea: number;
        numberOfPieces: number;
        numberOfRooms: number;
        numberOfWC: number;
        numberOfBathRooms: number;
        numberOfFloors: number;
        FloorOfTheApartment: number;
        yearOfBuilding: number;
        yearOfRenovation: number;
        heatingTypeSystem: string;
        environment: string;
        view: string;
        orientation: string;
        proximity: string;
        extra: string;
        grossPrice: string;
        expenses: string;
        netPrice: number;
        accessoryFees: number;
        parking: string;
        interior: number;
        exterior: number;
        propertyName: string;
        description: string;
        mediaFiles: [];
        availabilityOfVisit: Date;
    }>()
)



export const addGood = createAction(
    '[Good components] add good process',
    props<{ good: Good }>()
)
export const addGoodSuccess = createAction(
    '[Good effect]  add good process success'
)
export const addGoodFailure = createAction(
    '[Good effect] add good process failure',
    props<{ error: string }>()
)

