import { createAction, props } from "@ngrx/store";
import { ModifyInstanceAttributeRequest } from "aws-sdk/clients/ec2";
import { Payslip } from "src/app/models/payslip";
import { User } from "src/app/models/user";


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
        profileImage: string,
        email: string,
        password:string,
    }>()
)



export const profession = createAction(
    '[Profession component] add about section info to state',
    props<{
        profession?: string;
        professionDate?: Date;
        employer?: string;
        workplace?: string;
        contactPerson?: string;
        professionalPhoneNumber?: string;
        grossMonthlyIncome?: number;
        netMonthlyIncome?: number;
        lastEmployer?: string;
        lastEmployerSince?: Date;
        payslips?: Payslip;
        pursuitSheet?: string;
    }>()
)



export const address = createAction(
    '[Address component] add about section info to state',
    props<{
        nationality?: string;
        placeOfOrigin?: string;
        typeOfPermit?: string;
        hasPutUnderGuardianship?: string;
        putUnderGuardianship?: string;
        inSwitzerlandSince?: Date;
        familyOrPrimaryAccommodation?: boolean;
        numberOfPeopleOccupyingTheFutureAccommodation?: number;
        numberOfAdults?: number;
        numberOfChildren?: number;
        hasPets?: string;
        pets?: string;
        hasMusicInstruments?: string;
        musicInstruments?: string;
    }>()
)

export const processPayslip = createAction('[activity component] process Payslip ');
export const processPayslipServer = createAction('[activity effect] process Payslip ', props<{ buffer: any }>());

export const processPayslipSuccess = createAction('[activity effect] process Payslip Success', props<{ montantBrut: number, montantNet: number }>());
export const processPayslipFailure = createAction('[activity effect] process Payslip Failure', props<{ errorMsg: string }>());


export const otherInfos = createAction(
    '[OtherInfos component] add about section info to state',
    props<{
        smoker?: string;
        contractHasBeenTerminatedByTheLessor?: string;
        contractHasBeenTerminatedByTheLessorWhy?: string;
        lawsuitsDuringTheLastTwoYears?: string
        BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears?: number;
        civilLiabilityInsurance?: string;
        civilLiabilityInsuranceCompany?: string;
    }>()
)


export const property = createAction(
    '[Property component] add about section info to state',
    props<{
        currentDonor?: string;
        numberOfPieces?: number;
        currentRent?: number;
        leaseInYourName?: string;
        ReasonForChange?: string;
        howDidYouFindThisObject?: string;
        doYouHaveACar?: string;
        HaveACarHowMuch?: number;
        areYouInterestedInAParkingSpace?: string;
        InterestedInAParkingSpaceHowMuch?: number,
        refrences?: string;
        possibleRemarks?: string;
    }>()
)
export const register = createAction(
    '[Activity component] register process',
    props<{ user: User }>()
)
export const registerSuccess = createAction(
    '[Bailleur effect] register process success'
)
export const registerFailure = createAction(
    '[Bailleur effect] register process failure',
    props<{ error: string }>()
)

