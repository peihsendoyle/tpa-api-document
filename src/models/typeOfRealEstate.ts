/**
 * TPA BackendLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface TypeOfRealEstate {
  key: string;
  value: string;
}

export const typeOfRealEstateSchema: Schema<TypeOfRealEstate> = object({
  key: ['key', string()],
  value: ['value', string()],
});
