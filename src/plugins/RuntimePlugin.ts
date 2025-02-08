import { EaCAtomicIconsProcessor } from '@fathym/atomic-icons';
import { FathymAtomicIconsPlugin } from '@fathym/atomic-icons/plugin';
import { DefaultMyCoreProcessorHandlerResolver } from './DefaultMyCoreProcessorHandlerResolver.ts';
import { IoCContainer } from '@fathym/ioc';
import { EaCRuntimePlugin, EaCRuntimePluginConfig } from '@fathym/eac/runtime/plugins';
import { EaCRuntimeConfig } from '@fathym/eac/runtime/config';
import { EverythingAsCode } from '@fathym/eac';
import { EverythingAsCodeApplications } from '@fathym/eac-applications';
import { EaCPreactAppProcessor, EaCTailwindProcessor } from '@fathym/eac-applications/processors';
import { EaCDenoKVDetails, EverythingAsCodeDenoKV } from '@fathym/eac-deno-kv';
import {
  EaCJSRDistributedFileSystemDetails,
  EaCLocalDistributedFileSystemDetails,
} from '@fathym/eac/dfs';
import {
  EaCBaseHREFModifierDetails,
  EaCKeepAliveModifierDetails,
} from '@fathym/eac-applications/modifiers';

export default class RuntimePlugin implements EaCRuntimePlugin {
  constructor() {}

  public Setup(config: EaCRuntimeConfig) {
    const pluginConfig: EaCRuntimePluginConfig<
      EverythingAsCode & EverythingAsCodeApplications & EverythingAsCodeDenoKV
    > = {
      Name: RuntimePlugin.name,
      Plugins: [new FathymAtomicIconsPlugin()],
      IoC: new IoCContainer(),
      EaC: {
        Projects: {
          core: {
            Details: {
              Name: 'Golden Path Web Runtime',
              Description: 'The Golden Path Web Runtime to use.',
              Priority: 100,
            },
            ResolverConfigs: {
              localhost: {
                Hostname: 'localhost',
                Port: config.Server.port || 8000,
              },
              '127.0.0.1': {
                Hostname: '127.0.0.1',
                Port: config.Server.port || 8000,
              },
            },
            ModifierResolvers: {
              keepAlive: {
                Priority: 5000,
              },
            },
            ApplicationResolvers: {
              atomicIcons: {
                PathPattern: '/icons*',
                Priority: 200,
              },
              home: {
                PathPattern: '*',
                Priority: 100,
              },
              tailwind: {
                PathPattern: '/tailwind*',
                Priority: 500,
              },
            },
          },
        },
        Applications: {
          atomicIcons: {
            Details: {
              Name: 'Atomic Icons',
              Description: 'The atomic icons for the project.',
            },
            ModifierResolvers: {},
            Processor: {
              Type: 'AtomicIcons',
              Config: {
                IconSet: {
                  IconMap: { add: 'https://api.iconify.design/gg:add.svg' },
                },
                Generate: true,
                SpriteSheet: '/iconset',
              },
            } as EaCAtomicIconsProcessor,
          },
          home: {
            Details: {
              Name: 'Home Site',
              Description: 'Home site.',
            },
            ModifierResolvers: {
              baseHref: {
                Priority: 10000,
              },
            },
            Processor: {
              Type: 'PreactApp',
              AppDFSLookup: 'local:apps/home',
              ComponentDFSLookups: [
                ['local:apps/components', ['tsx']],
                ['local:apps/home', ['tsx']],
                ['local:apps/islands', ['tsx']],
                ['jsr:@fathym/atomic', ['tsx']],
                ['jsr:@fathym/atomic-design-kit', ['tsx']],
              ],
            } as EaCPreactAppProcessor,
          },
          tailwind: {
            Details: {
              Name: 'Tailwind for the Site',
              Description: 'A tailwind config for the site',
            },
            Processor: {
              Type: 'Tailwind',
              DFSLookups: [
                'local:apps/components',
                'local:apps/home',
                'local:apps/islands',
                'jsr:@fathym/atomic',
                'jsr:@fathym/atomic-design-kit',
              ],
              ConfigPath: './tailwind.config.ts',
              StylesTemplatePath: './apps/tailwind/styles.css',
              CacheControl: {
                'text\\/css': `public, max-age=${60 * 60 * 24 * 365}, immutable`,
              },
            } as EaCTailwindProcessor,
          },
        },
        DenoKVs: {
          thinky: {
            Details: {
              Type: 'DenoKV',
              Name: 'Thinky',
              Description: 'The Deno KV database to use for thinky',
              DenoKVPath: Deno.env.get('THINKY_DENO_KV_PATH') || undefined,
            } as EaCDenoKVDetails,
          },
        },
        DFSs: {
          'local:apps/components': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/components/',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve(
                '@fathym/eac/dfs/workers/local',
              ),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'local:apps/home': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/home/',
              DefaultFile: 'index.tsx',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve(
                '@fathym/eac/dfs/workers/local',
              ),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'local:apps/islands': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/islands/',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve(
                '@fathym/eac/dfs/workers/local',
              ),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'jsr:@fathym/atomic': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/atomic-design-kit',
              Version: '',
              WorkerPath: import.meta.resolve(
                '@fathym/eac/dfs/workers/jsr',
              ),
            } as EaCJSRDistributedFileSystemDetails,
          },
          'jsr:@fathym/atomic-design-kit': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/atomic-design-kit',
              Version: '',
              WorkerPath: import.meta.resolve(
                '@fathym/eac/dfs/workers/jsr',
              ),
            } as EaCJSRDistributedFileSystemDetails,
          },
        },
        Modifiers: {
          baseHref: {
            Details: {
              Type: 'BaseHREF',
              Name: 'Base HREF',
              Description: 'Adjusts the base HREF of a response based on configureation.',
            } as EaCBaseHREFModifierDetails,
          },
          keepAlive: {
            Details: {
              Type: 'KeepAlive',
              Name: 'Deno KV Cache',
              Description: 'Lightweight cache to use that stores data in a DenoKV database.',
              KeepAlivePath: '/_eac/alive',
            } as EaCKeepAliveModifierDetails,
          },
        },
      },
    };

    pluginConfig.IoC!.Register(DefaultMyCoreProcessorHandlerResolver, {
      Type: pluginConfig.IoC!.Symbol('ProcessorHandlerResolver'),
    });

    return Promise.resolve(pluginConfig);
  }
}
