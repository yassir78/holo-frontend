import { createReducer, on } from "@ngrx/store";
import { initialBailleurRegisterState } from "./bailleur.state";
import * as BailleurActions from "./bailleur.action"
export const bailleurReducer = createReducer(
    initialBailleurRegisterState,
    on(BailleurActions.about, (state, action) => {
        return {
            ...state, user: { ...state.user, firstName: action.firstName, lastName: action.lastName, gender: action.gender, birth: action.birth, locality: action.locality, simpleAddress: action.address, domiciledSince: action.domiciledSince, maritalStatus: action.maritalStatus, phoneNumber: action.phoneNumber, email: action.email }
        }
    }),
    on(BailleurActions.profession, (state, action) => {
        return {
            ...state, user: {
                ...state.user, profession: {
                    ...state.user.profession, profession: action.profession,
                    professionDate: action.professionDate,
                    employer: action.employer,
                    workplace: action.workplace,
                    contactPerson: action.contactPerson,
                    professionalPhoneNumber: action.professionalPhoneNumber,
                    grossMonthlyIncome: action.grossMonthlyIncome,
                    netMonthlyIncome: action.netMonthlyIncome,
                    lastEmployer: action.lastEmployer,
                    lastEmployerSince: action.lastEmployerSince,
                    payslips: action.payslips,
                    pursuitSheet: action.pursuitSheet
                }
            }
        }
    }),
    on(BailleurActions.address, (state, action) => {
        return {
            ...state, user: {
                ...state.user, address: {
                    ...state.user.address, nationality: action.nationality,
                    placeOfOrigin: action.placeOfOrigin,
                    typeOfPermit: action.typeOfPermit,
                    hasPutUnderGuardianship: action.hasPutUnderGuardianship,
                    putUnderGuardianship: action.putUnderGuardianship,
                    inSwitzerlandSince: action.inSwitzerlandSince,
                    familyOrPrimaryAccommodation: action.familyOrPrimaryAccommodation,
                    numberOfPeopleOccupyingTheFutureAccommodation: action.numberOfPeopleOccupyingTheFutureAccommodation,
                    numberOfAdults: action.numberOfAdults,
                    numberOfChildren: action.numberOfChildren,
                    hasPets: action.hasPets,
                    pets: action.pets,
                    hasMusicInstruments: action.hasMusicInstruments,
                    musicInstruments: action.musicInstruments

                }
            }
        }
    }),
    on(BailleurActions.otherInfos, (state, action) => {
        return {
            ...state, user: {
                ...state.user, other: {
                    ...state.user.other, smoker: action.smoker,
                    contractHasBeenTerminatedByTheLessor: action.contractHasBeenTerminatedByTheLessor,
                    contractHasBeenTerminatedByTheLessorWhy: action.contractHasBeenTerminatedByTheLessorWhy,
                    lawsuitsDuringTheLastTwoYears: action.lawsuitsDuringTheLastTwoYears,
                    BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears: action.BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears,
                    civilLiabilityInsurance: action.civilLiabilityInsurance,
                    civilLiabilityInsuranceCompany: action.civilLiabilityInsuranceCompany
                }
            }
        }
    }),
    on(BailleurActions.property, (state, action) => {
        return {
            ...state, user: {
                ...state.user, other: {
                    ...state.user.other,
                    currentDonor: action.currentDonor,
                    numberOfPieces: action.numberOfPieces,
                    currentRent: action.currentRent,
                    leaseInYourName: action.leaseInYourName,
                    ReasonForChange: action.ReasonForChange,
                    howDidYouFindThisObject: action.howDidYouFindThisObject,
                    doYouHaveACar: action.doYouHaveACar,
                    HaveACarHowMuch: action.HaveACarHowMuch,
                    areYouInterestedInAParkingSpace: action.areYouInterestedInAParkingSpace,
                    InterestedInAParkingSpaceHowMuch: action.InterestedInAParkingSpaceHowMuch,
                    refrences: action.refrences,
                    possibleRemarks: action.possibleRemarks

                }
            }
        }
    })

)