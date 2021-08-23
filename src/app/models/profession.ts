import { Payslip } from "./payslip";

export interface Profession{
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
}