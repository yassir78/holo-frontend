import { DateAndHours } from "./datesAndHours";

export interface Good {
  status?: string;
  agencyName?: string;
  agencyForm?: string;
  propertyType?: string;
  availablity?: Date;
  state?: string;
  zipCode?: string;
  address?: string;
  livingSpace?: number;
  terraceArea?: number;
  gardenArea?: number;
  numberOfPieces?: number;
  numberOfRooms?: number;
  numberOfWC?: number;
  numberOfBathRooms?: number;
  numberOfFloors?: number;
  FloorOfTheApartment?: number;
  yearOfBuilding?: number;
  yearOfRenovation?: number;
  heatingTypeSystem?: string;
  environment?: string;
  view?: string;
  orientation?: string;
  proximity?: string;
  extra?: string;
  grossPrice?: string;
  grossPriceType?: string;
  expenses?: string;
  netPrice?: number;
  accessoryFees?: number;
  parking?: string;
  interior?: number;
  exterior?: number;
  propertyName?: string;
  description?: string;
  mediaFiles?: string[];
  availabilityOfVisit?: DateAndHours[];

}