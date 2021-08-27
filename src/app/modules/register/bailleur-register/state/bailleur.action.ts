import { createAction, props } from "@ngrx/store";
import { Payslip } from "src/app/models/payslip";


export const about = createAction(
    '[About component] add about section info to state',
    props<{
        gender: string,
        firstName: string,
        lastName: string,
        birth: Date,
        locality: string,
        address: string,
        domiciledSince: Date,
        maritalStatus: string,
        phoneNumber: string,
        email: string
    }>()
)



export const profession = createAction(
    '[Profession component] add about section info to state',
    props<{
        profession?:string; 
        professionDate?:Date;
        employer?:string;
        workplace?:string;
        contactPerson?:string;
        professionalPhoneNumber?:string;
        grossMonthlyIncome?:number;
        netMonthlyIncome?:number;
        lastEmployer?:string;
        lastEmployerSince?:Date;
        payslips?:Payslip[];
        pursuitSheet?:string;
    }>()
)



export const address = createAction(
    '[Address component] add about section info to state',
    props<{
        nationality?:string;
        placeOfOrigin?:string;
        typeOfPermit?:string;
        hasPutUnderGuardianship?:string;
        putUnderGuardianship?:string;
        inSwitzerlandSince?:Date;
        familyOrPrimaryAccommodation?:boolean;
        numberOfPeopleOccupyingTheFutureAccommodation?:number;
        numberOfAdults?:number;
        numberOfChildren?:number;
        hasPets?:string;
        pets?:string;
        hasMusicInstruments?:string;
        musicInstruments?:string;
    }>()
)



export const otherInfos = createAction(
    '[OtherInfos component] add about section info to state',
    props<{
        smoker?:string;
        contractHasBeenTerminatedByTheLessor?:string;
        contractHasBeenTerminatedByTheLessorWhy?:string;
        lawsuitsDuringTheLastTwoYears?:string
        BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears?:number;
        civilLiabilityInsurance?:string;
        civilLiabilityInsuranceCompany?:string;
    }>()
)


export const property = createAction(
    '[Property component] add about section info to state',
    props<{
        currentDonor?:string;
        numberOfPieces?:number;
        currentRent?:number;
        leaseInYourName?:string;
        ReasonForChange?:string;
        howDidYouFindThisObject?:string;
        doYouHaveACar?:string;
        HaveACarHowMuch?:number;
        areYouInterestedInAParkingSpace?:string;
        InterestedInAParkingSpaceHowMuch?:number,
        refrences?:string;
        possibleRemarks?:string;
    }>()
)


