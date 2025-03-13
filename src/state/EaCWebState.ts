import { EverythingAsCode } from '@fathym/eac';
import { EverythingAsCodeClouds } from '@fathym/eac-azure';
import { CurrentEaCState } from '@fathym/eac-applications/steward/api';

export type EaCWebState = {
  AzureAccessToken?: string;

  CloudLookup?: string;

  ResourceGroupLookup?: string;
} & CurrentEaCState<EverythingAsCode & EverythingAsCodeClouds>;
