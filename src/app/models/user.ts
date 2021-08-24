import { Address } from "./address";
import { Role } from "./enums/role";
import { Other } from "./Other";
import { Payslip } from "./payslip";
import { Profession } from "./profession";
import { Property } from "./property";
import { Recouvrement } from "./recouvrement";

export interface User {
   id?: number;
   firstName?: string;
   lastName?: string;
   password?: string;
   email?: string;
   phoneNumber?: string;
   birth?: Date;
   domiciledSince?: Date;
   roles?: Role[];
   gender?: string;
   locality?: string;
   profileImage?: string;
   maritalStatus?: string;
   profession?: Profession;
   simpleAddress?: string;
   address?: Address;
   other?: Other;
   property?: Property;
   recouvrement?: Recouvrement;
}
