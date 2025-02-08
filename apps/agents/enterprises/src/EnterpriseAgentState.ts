import { AgentState } from '../../src/AgentState.ts';

import { EaCEnterpriseDetails } from '@fathym/eac';

export type EnterpriseAgentState = {
  Enterprise: EaCEnterpriseDetails;
} & AgentState;
