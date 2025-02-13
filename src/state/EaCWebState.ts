import { EverythingAsCode } from '@fathym/eac';
import { EverythingAsCodeClouds } from '@fathym/eac-azure';

export type EaCWebState = {
  AzureAccessToken?: string;

  CloudLookup?: string;

  EaC?: EverythingAsCode & EverythingAsCodeClouds;

  EaCJWT?: string;

  ResourceGroupLookup?: string;

  Username?: string;
};
