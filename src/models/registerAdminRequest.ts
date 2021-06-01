/**
 * TPA BackendLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

export interface RegisterAdminRequest {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  isVerified: boolean;
}

export const registerAdminRequestSchema: Schema<RegisterAdminRequest> = object({
  firstName: ['first_name', string()],
  lastName: ['last_name', string()],
  username: ['username', string()],
  password: ['password', string()],
  email: ['email', string()],
  isVerified: ['is_verified', boolean()],
});
