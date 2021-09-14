import { createAction, props } from "@ngrx/store";
import { ModifyInstanceAttributeRequest } from "aws-sdk/clients/ec2";
import { Good } from "src/app/models/good";
import { Payslip } from "src/app/models/payslip";
import { User } from "src/app/models/user";

export const information = createAction(
    '[Information component] add good infos to state',
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
       
    }>()
)


export const details = createAction(
    '[Details component] add good infos to state',
    props<{
      
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
        
    }>()
)


export const price = createAction(
    '[Price component add good infos to state',
    props<{
      
        grossPrice: string;
        grossPriceType: string;
        expenses: string;
        netPrice: number;
        accessoryFees: number;
        parking: string;
        interior: number;
        exterior: number;
      
    }>()
)


export const description = createAction(
    '[Description component] add good infos to state',
    props<{
        propertyName: string;
        description: string;
      
    }>()
)

export const media = createAction(
    '[Media component] add good infos to state',
    props<{
    
        mediaFiles: [];
    }>()
)

export const disponibility = createAction(
    '[Disponibility component] add good infos to state',
    props<{
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

