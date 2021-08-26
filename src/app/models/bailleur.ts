import { Address } from "./address";
import { Other } from "./other";
import { Profession } from "./profession";
import { Property } from "./property";
import { Recouvrement } from "./recouvrement";
import { User } from "./user";

export interface Bailleur extends User {
    domiciledSince?: Date;
    gender?: string;
    locality?: string;
    maritalStatus?: string;
    profession?: Profession;
    simpleAddress?: string;
    address?: Address;
    other?: Other;
    property?: Property;
    recouvrement?: Recouvrement;
}
