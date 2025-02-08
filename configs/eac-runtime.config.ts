import { EaCRuntime } from '@fathym/eac/runtime';
import { defineEaCApplicationsConfig } from '@fathym/eac-applications/runtime';
import RuntimePlugin from '../src/plugins/RuntimePlugin.ts';
import { RuntimeLoggingProvider } from '../src/logging/RuntimeLoggingProvider.ts';

export const config = defineEaCApplicationsConfig(
  {
    Plugins: [new RuntimePlugin()],
  },
  new RuntimeLoggingProvider(),
);

export function configure(_rt: EaCRuntime): Promise<void> {
  return Promise.resolve();
}
