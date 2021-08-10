import { Role } from "./enums/role";
import { Payslip } from "./payslip";

export interface User {
   id?:number;
   firstName?:string;
   lastName?:string;
   password?:string;
   email?:string;
   phoneNumber?:string;
   birth?:Date;
   address?:string;
   domiciledSince?:string;
   roles?:Role[];
   gender?:string;
   profileImage?:string;
   maritalStatus?:string;
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
   payslips:Payslip[];
   pursuitSheet:string;
   nationality:string;
   placeOfOrigin:string;
   typeOfPermit:string;
   putUnderGuardianship:string;
   inSwitzerlandSince:Date;
   familyOrPrimaryAccommodation:boolean;
   numberOfPeopleOccupyingTheFutureAccommodation:number;
   numberOfAdults:number;
   numberOfChildren:number;
   pets:string;
   musicInstruments:string;
   smoker:boolean;
   contractHasBeenTerminatedByTheLessor:string;
   lawsuitsDuringTheLastTwoYears:string
   BeingSubjectOfActsOfDefaultOfGoodsDuringInTheLastFiveYears:number;
   civilLiabilityInsurance:boolean;
   liabilityInsurance:boolean;
   liabilityInsuranceCompagnies:string;
   currentDonor:string;
   numberOfPieces:number;
   currentRent:number;
   leaseInYourName:boolean;
   ReasonForChange:string;
   howDidYouFindThisObject:string;
   doYouHaveACar:boolean;
   areYouInterestedInAParkingSpace:boolean;
   refrences:string;
   possibleRemarks:string;
   nameOfTheBank:string;
   bankAccountNumber:number;
   zipCode:number;
   accountOwner:string;



















}
