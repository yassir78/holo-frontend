import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import * as BailleurdbActions from "./bailleurdb.action";
import { initialBailleurDashboardState } from "./bailleurdb.state";

export const addGoodReducer = createReducer(
    initialBailleurDashboardState,
    on(BailleurdbActions.information, (state, action) => {
        return {
            ...state, good: { ...state.good,   status: action.status,
                agencyName: action.agencyName,
                agencyForm:action.agencyForm,
                propertyType: action.propertyType,
                availablity:action.availablity,
                state: action.state,
                zipCode: action.zipCode,
                address:action.address,
                livingSpace:action.livingSpace,
                terraceArea:action.terraceArea,
                gardenArea: action.gardenArea
            }
        }
    }),
    on(BailleurdbActions.details, (state, action) => {
        return {
            ...state, good: { ...state.good,  numberOfPieces: action.numberOfPieces,
                numberOfRooms: action.numberOfRooms,
                numberOfWC:action.numberOfWC,
                numberOfBathRooms:action.numberOfRooms,
                numberOfFloors: action.numberOfFloors,
                FloorOfTheApartment:action.FloorOfTheApartment,
                yearOfBuilding:action.yearOfBuilding,
                yearOfRenovation:action.yearOfRenovation,
                heatingTypeSystem: action.heatingTypeSystem,
                environment: action.environment,
                view: action.view,
                orientation: action.orientation,
                proximity: action.proximity,
                extra: action.extra
            }
        }
    }),
    on(BailleurdbActions.price, (state, action) => {
        return {
            ...state, good: { ...state.good,    grossPrice: action.grossPrice, grossPriceType:action.grossPriceType,
                expenses: action.expenses,
                netPrice: action.netPrice,
                accessoryFees: action.accessoryFees,
                parking: action.parking,
                interior: action.interior,
                exterior: action.exterior
            }
        }
    }),
    on(BailleurdbActions.description, (state, action) => {
        return {
            ...state, good: { ...state.good,     propertyName: action.propertyName,
                description:action.description
            }
        }
    }),
    on(BailleurdbActions.media, (state, action) => {
        return {
            ...state, good: { ...state.good,  
                mediaFiles:action.mediaFiles
            }
        }
    }),
    on(BailleurdbActions.addGoodSuccess, (state, action) => {
        return { ...state, isLoading: false }
    }),
    on(BailleurdbActions.addGoodFailure, (state, action) => {
        return { ...state, isLoading: false, error: action.error }
    }),

)