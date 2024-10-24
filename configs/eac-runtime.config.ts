import * as _azureSearch from 'npm:@azure/search-documents@12.1.0';
import * as _parse from 'npm:pdf-parse@1.1.1';
import * as _htmlToText from 'npm:html-to-text@9.0.5';
import { DefaultEaCConfig, defineEaCConfig, EaCRuntime } from '@fathym/eac-runtime';
import RuntimePlugin from '../src/plugins/RuntimePlugin.ts';
import { RuntimeLoggingProvider } from '../src/logging/RuntimeLoggingProvider.ts';

export const config = defineEaCConfig({
  LoggingProvider: new RuntimeLoggingProvider(),
  Plugins: [...(DefaultEaCConfig.Plugins || []), new RuntimePlugin()],
});

export function configure(_rt: EaCRuntime): Promise<void> {
  return Promise.resolve();
}
