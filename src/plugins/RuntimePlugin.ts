import { EaCAtomicIconsProcessor } from '@fathym/atomic-icons';
import { FathymAtomicIconsPlugin } from '@fathym/atomic-icons/plugin';
import { DefaultMyCoreProcessorHandlerResolver } from './DefaultMyCoreProcessorHandlerResolver.ts';
import { IoCContainer } from '@fathym/ioc';
import { EaCRuntimePlugin } from '@fathym/eac/runtime/plugins';
import { EaCRuntimeConfig, EaCRuntimePluginConfig } from '@fathym/eac/runtime/config';
import { EverythingAsCode } from '@fathym/eac';
import { EverythingAsCodeApplications } from '@fathym/eac-applications';
import {
  EaCDFSProcessor,
  EaCOAuthProcessor,
  EaCPreactAppProcessor,
  EaCProxyProcessor,
  EaCRedirectProcessor,
  EaCTailwindProcessor,
} from '@fathym/eac-applications/processors';
import { EaCDenoKVDetails, EverythingAsCodeDenoKV } from '@fathym/eac-deno-kv';
import {
  EaCAzureBlobStorageDistributedFileSystemDetails,
  EaCJSRDistributedFileSystemDetails,
  EaCLocalDistributedFileSystemDetails,
} from '@fathym/eac/dfs';
import {
  EaCBaseHREFModifierDetails,
  EaCGoogleTagMgrModifierDetails,
  EaCKeepAliveModifierDetails,
  EaCMSAppInsightsModifierDetails,
  EaCOAuthModifierDetails,
} from '@fathym/eac-applications/modifiers';
import { FathymAzureContainerCheckPlugin } from '@fathym/eac-applications/runtime/plugins';
import { EaCMSALProcessor } from '@fathym/msal';
import EaCMSALPlugin from './EaCMSALPlugin.ts';
import { EaCAzureADB2CProviderDetails, EaCAzureADProviderDetails } from '@fathym/eac-identity';

export default class RuntimePlugin implements EaCRuntimePlugin {
  constructor() {}

  public Setup(config: EaCRuntimeConfig) {
    const thinkyRoot = Deno.env.get('THINKY_ROOT')!;

    const pluginConfig: EaCRuntimePluginConfig<
      EverythingAsCode & EverythingAsCodeApplications & EverythingAsCodeDenoKV
    > = {
      Name: RuntimePlugin.name,
      Plugins: [
        new FathymAzureContainerCheckPlugin(),
        new FathymAtomicIconsPlugin(),
        new EaCMSALPlugin(),
      ],
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
              'host.docker.internal': {
                Hostname: 'host.docker.internal',
                Port: config.Server.port || 8000,
              },
              'www.fathym.com': {
                Hostname: 'www.fathym.com',
              },
              'fathym-web-runtime.azurewebsites.net': {
                Hostname: 'fathym-web-runtime.azurewebsites.net',
              },
            },
            ModifierResolvers: {
              googleTagMgr: {
                Priority: 5000,
              },
              keepAlive: {
                Priority: 5000,
              },
              msAppInsights: {
                Priority: 5000,
              },
              oauth: {
                Priority: 8000,
              },
            },
            ApplicationResolvers: {
              apiProxy: {
                PathPattern: '/api/eac/*',
                Priority: 200,
              },
              atomicIcons: {
                PathPattern: '/icons*',
                Priority: 200,
              },
              dashboard: {
                PathPattern: '/dashboard*',
                Priority: 200,
                IsPrivate: true,
                IsTriggerSignIn: true,
              },
              home: {
                PathPattern: '*',
                Priority: 100,
              },
              install: {
                PathPattern: '/deno/install/*',
                Priority: 200,
              },
              installRedirect: {
                PathPattern: '/deno/install',
                Priority: 300,
              },
              msal: {
                PathPattern: '/azure/oauth/*',
                Priority: 500,
                IsPrivate: true,
                IsTriggerSignIn: true,
              },
              oauth: {
                PathPattern: '/oauth*',
                Priority: 500,
              },
              tailwind: {
                PathPattern: '/tailwind*',
                Priority: 500,
              },
              thinkyAzureProxy: {
                PathPattern: '/dashboard/thinky/connect/azure/*',
                Priority: 200,
                // IsPrivate: true,
              },
              thinkyProxy: {
                PathPattern: '/api/thinky*',
                Priority: 200,
                // IsPrivate: true,
              },
              thinkyPublicProxy: {
                PathPattern: '/api/public-thinky*',
                Priority: 200,
                // IsPrivate: true,
              },
            },
          },
        },
        Applications: {
          apiProxy: {
            Details: {
              Name: 'EaC API Proxy',
              Description: 'A proxy for the EaC API service.',
            },
            ModifierResolvers: {},
            Processor: {
              Type: 'Proxy',
              ProxyRoot: Deno.env.get('EAC_API_BASE_URL') ??
                'http://localhost:6130/api/eac/',
            } as EaCProxyProcessor,
          },
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
                  IconMap: {
                    begin: 'https://api.iconify.design/fe:beginner.svg',
                    check: 'https://api.iconify.design/lets-icons:check-fill.svg',
                    copy: 'https://api.iconify.design/solar:copy-outline.svg',
                    delete: 'https://api.iconify.design/material-symbols-light:delete.svg',
                    edit: 'https://api.iconify.design/mdi:edit.svg',
                    loading: 'https://api.iconify.design/mdi:loading.svg',
                  },
                },
                Generate: true,
                SpriteSheet: '/iconset',
              },
            } as EaCAtomicIconsProcessor,
          },
          dashboard: {
            Details: {
              Name: 'Dashboard Site',
              Description: 'The dashboard site to be used for the marketing of the project',
            },
            ModifierResolvers: {
              baseHref: {
                Priority: 10000,
              },
            },
            Processor: {
              Type: 'PreactApp',
              AppDFSLookup: 'local:apps/dashboard',
              ComponentDFSLookups: [
                ['local:apps/components', ['tsx']],
                ['local:apps/dashboard', ['tsx']],
                ['local:apps/islands', ['tsx']],
                ['jsr:@fathym/atomic', ['tsx']],
                ['jsr:@fathym/atomic-design-kit', ['tsx']],
                ['jsr:@fathym/code-editor', ['tsx']],
              ],
            } as EaCPreactAppProcessor,
          },
          home: {
            Details: {
              Name: 'About Marketing Plasmic Site',
              Description: 'About Marketing Plasmic Home site.',
            },
            ModifierResolvers: {
              baseHref: {
                Priority: 10000,
              },
            },
            Processor: {
              Type: 'DFS',
              DFSLookup: 'abs:public-web-about',
              CacheControl: {
                'text\\/html': `private, max-age=${60 * 5}`,
                'image\\/': `public, max-age=${60 * 60 * 24 * 365}, immutable`,
                'application\\/javascript': `public, max-age=${60 * 60 * 24 * 365}, immutable`,
                'application\\/typescript': `public, max-age=${60 * 60 * 24 * 365}, immutable`,
                'text\\/css': `public, max-age=${60 * 60 * 24 * 365}, immutable`,
              },
            } as EaCDFSProcessor,
          },
          install: {
            Details: {},
            Processor: {
              Type: 'DFS',
              DFSLookup: 'jsr:@fathym/eac-install',
            } as EaCDFSProcessor,
          },
          installRedirect: {
            Details: {},
            Processor: {
              Type: 'Redirect',
              Permanent: true,
              PreserveMethod: true,
              Redirect: '/deno/install/',
            } as EaCRedirectProcessor,
          },
          msal: {
            Details: {
              Name: 'OAuth Site',
              Description: 'The site for use in OAuth workflows for a user',
            },
            Processor: {
              Type: 'MSAL',
              Config: {
                MSALSignInOptions: {
                  Scopes: [
                    'https://management.core.windows.net//user_impersonation',
                  ],
                  RedirectURI: '/azure/oauth/callback',
                  SuccessRedirect: '/cloud',
                },
                MSALSignOutOptions: {
                  ClearSession: false,
                  PostLogoutRedirectUri: '/',
                },
              },
              ProviderLookup: 'azure',
            } as EaCMSALProcessor,
          },
          oauth: {
            Details: {
              Name: 'OAuth Site',
              Description: 'The site for use in OAuth workflows for a user',
            },
            Processor: {
              Type: 'OAuth',
              ProviderLookup: 'adb2c',
            } as EaCOAuthProcessor,
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
                'local:apps/dashboard',
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
          thinkyAzureProxy: {
            Details: {
              Name: 'Thinky Azure Auth Proxy',
              Description: 'A proxy for Thinky Azure OAuth.',
            },
            ModifierResolvers: {},
            Processor: {
              Type: 'Proxy',
              ProxyRoot: `${thinkyRoot}/connect/azure/`,
            } as EaCProxyProcessor,
          },
          thinkyProxy: {
            Details: {
              Name: 'Thinky Proxy',
              Description: 'A proxy for to Thinky.',
            },
            ModifierResolvers: {},
            Processor: {
              Type: 'Proxy',
              ProxyRoot: `${thinkyRoot}/circuits`,
            } as EaCProxyProcessor,
          },
          thinkyPublicProxy: {
            Details: {
              Name: 'Thinky Proxy',
              Description: 'A proxy for to Thinky.',
            },
            ModifierResolvers: {},
            Processor: {
              Type: 'Proxy',
              ProxyRoot: `${thinkyRoot}/public-circuits`,
            } as EaCProxyProcessor,
          },
        },
        DenoKVs: {
          cache: {
            Details: {
              Type: 'DenoKV',
              Name: 'Local Cache',
              Description: 'The Deno KV database to use for local caching',
              DenoKVPath: Deno.env.get('LOCAL_CACHE_DENO_KV_PATH') || undefined,
            } as EaCDenoKVDetails,
          },
          eac: {
            Details: {
              Type: 'DenoKV',
              Name: 'EaC DB',
              Description: 'The Deno KV database to use for local caching',
              DenoKVPath: Deno.env.get('EAC_DENO_KV_PATH') || undefined,
            } as EaCDenoKVDetails,
          },
          oauth: {
            Details: {
              Type: 'DenoKV',
              Name: 'OAuth DB',
              Description: 'The Deno KV database to use for local caching',
              DenoKVPath: Deno.env.get('OAUTH_DENO_KV_PATH') || undefined,
            } as EaCDenoKVDetails,
          },
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
          'abs:public-web-about': {
            Details: {
              Type: 'AzureBlobStorage',
              Container: 'deployments',
              FileRoot: 'o-biotech/public-web-about/latest',
              DefaultFile: 'index.html',
              ConnectionString: Deno.env.get('AZURE_STORAGE_CONNECTION_STRING'),
              // WorkerPath: import.meta.resolve(
              //   '@fathym/eac/dfs/workers/azureblobstorage',
              // ),
            } as EaCAzureBlobStorageDistributedFileSystemDetails,
          },
          'local:apps/components': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/components/',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/local'),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'local:apps/dashboard': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/dashboard/',
              DefaultFile: 'index.tsx',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/local'),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'local:apps/islands': {
            Details: {
              Type: 'Local',
              FileRoot: './apps/islands/',
              Extensions: ['tsx'],
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/local'),
            } as EaCLocalDistributedFileSystemDetails,
          },
          'jsr:@fathym/atomic': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/atomic',
              Version: '',
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/jsr'),
            } as EaCJSRDistributedFileSystemDetails,
          },
          'jsr:@fathym/atomic-design-kit': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/atomic-design-kit',
              Version: '',
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/jsr'),
            } as EaCJSRDistributedFileSystemDetails,
          },
          'jsr:@fathym/code-editor': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/code-editor',
              Version: '',
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/jsr'),
            } as EaCJSRDistributedFileSystemDetails,
            // 'jsr:@fathym/code-editor': {
            //   Type: 'Local',
            //   FileRoot: '../code-editor/src/',
            //   // WorkerPath: import.meta.resolve(
            //   //   '@fathym/eac-runtime/workers/local'
            //   // ),
            // } as EaCLocalDistributedFileSystem,
          },
          'jsr:@fathym/eac-install': {
            Details: {
              Type: 'JSR',
              Package: '@fathym/eac-install',
              Version: '',
              DefaultFile: 'install.ts',
              WorkerPath: import.meta.resolve('@fathym/eac/dfs/workers/jsr'),
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
          googleTagMgr: {
            Details: {
              Type: 'GoogleTagMgr',
              Name: 'Google Tag Manager',
              Description: 'Adds code to pages to support Google Analytics and other actions',
              GoogleID: Deno.env.get('GOOGLE_TAGS_ID')!,
            } as EaCGoogleTagMgrModifierDetails,
          },
          keepAlive: {
            Details: {
              Type: 'KeepAlive',
              Name: 'Deno KV Cache',
              Description: 'Lightweight cache to use that stores data in a DenoKV database.',
              KeepAlivePath: '/_eac/alive',
            } as EaCKeepAliveModifierDetails,
          },
          msAppInsights: {
            Details: {
              Type: 'MSAppInsights',
              Name: 'Microsoft Application Insights',
              Description:
                'Adds code to pages to support Microsoft Azure Application Insights and other actions',
              InstrumentationKey: Deno.env.get('APP_INSIGHTS_INSTRUMENTATION_KEY')!,
            } as EaCMSAppInsightsModifierDetails,
          },
          oauth: {
            Details: {
              Type: 'OAuth',
              Name: 'OAuth',
              Description: 'Used to restrict user access to various applications.',
              ProviderLookup: 'adb2c',
              SignInPath: '/oauth/signin',
            } as EaCOAuthModifierDetails,
          },
        },
        Providers: {
          adb2c: {
            DatabaseLookup: 'oauth',
            Details: {
              Name: 'Azure ADB2C OAuth Provider',
              Description: 'The provider used to connect with our azure adb2c instance',
              ClientID: Deno.env.get('AZURE_ADB2C_CLIENT_ID')!,
              ClientSecret: Deno.env.get('AZURE_ADB2C_CLIENT_SECRET')!,
              Scopes: ['openid', Deno.env.get('AZURE_ADB2C_CLIENT_ID')!],
              Domain: Deno.env.get('AZURE_ADB2C_DOMAIN')!,
              PolicyName: Deno.env.get('AZURE_ADB2C_POLICY')!,
              TenantID: Deno.env.get('AZURE_ADB2C_TENANT_ID')!,
              IsPrimary: true,
            } as EaCAzureADB2CProviderDetails,
          },
          azure: {
            DatabaseLookup: 'oauth',
            Details: {
              Name: 'Azure OAuth Provider',
              Description: 'The provider used to connect with Azure',
              ClientID: Deno.env.get('AZURE_AD_CLIENT_ID')!,
              ClientSecret: Deno.env.get('AZURE_AD_CLIENT_SECRET')!,
              Scopes: ['openid'],
              TenantID: Deno.env.get('AZURE_AD_TENANT_ID')!, //common
            } as EaCAzureADProviderDetails,
          },
        },
        $GlobalOptions: {
          DFSs: {
            PreventWorkers: true,
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
