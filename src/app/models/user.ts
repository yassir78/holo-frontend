import { Role } from "./enums/role";

export interface User {
   id?: number;
   firstName?: string;
   lastName?: string;
   password?: string;
   email?: string;
   phoneNumber?: string;
   birth?: Date;
   roles?: Role[];
   profileImage?: string;
}
