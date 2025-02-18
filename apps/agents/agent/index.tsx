import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCLinearCircuitDetails } from '@fathym/synaptic';
import { AgentState } from '../src/AgentState.ts';

type TestAgentData = {
  Hello?: string;
};

export const circuit: EaCLinearCircuitDetails = {
  Type: 'Graph',
};

export const api: EaCRuntimeHandlerSet<AgentState, TestAgentData> = {
  GET(_req, ctx) {
    const data: TestAgentData = {
      Hello: 'world',
    };

    return ctx.Render(data);
  },
};

export function Tile({ Data }: PageProps<TestAgentData>) {
  return (
    <>
      <h1>Hello {Data.Hello}</h1>
    </>
  );
}

export function EnterprisesAgent({ Data }: PageProps<TestAgentData>) {
  return (
    <>
      <h1>Hello there {Data.Hello}</h1>
    </>
  );
}
