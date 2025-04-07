import { EaCAzureADProviderDetails, EverythingAsCodeIdentity } from '@fathym/eac-identity';
import { createAzureADOAuthConfig, createOAuthHelpers } from '@fathym/common/oauth';
import { EverythingAsCode } from '@fathym/eac';
import { loadEaCAzureAPISvc } from '@fathym/eac-azure/steward/clients';
import { EaCRuntimeContext } from '@fathym/eac/runtime';
import { EaCRuntimeHandler } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../state/EaCWebState.ts';

export function buildCurrentEaCCloudMiddleware(): EaCRuntimeHandler<EaCWebState> {
  return async (
    req,
    ctx: EaCRuntimeContext<
      EaCWebState,
      Record<string, unknown>,
      EverythingAsCode & EverythingAsCodeIdentity
    >,
  ) => {
    if (ctx.State.EaC && ctx.State.EaCKV) {
      let [{ value: currentCloudLookup }, { value: currentResGroupLookup }] = await Promise.all([
        ctx.State.EaCKV.get<string>([
          'User',
          ctx.State.Username!,
          'Current',
          'CloudLookup',
        ]),
        ctx.State.EaCKV.get<string>([
          'User',
          ctx.State.Username!,
          'Current',
          'ResourceGroupLookup',
        ]),
      ]);

      const cloudLookups = Object.keys(ctx.State.EaC.Clouds || {});

      if (currentCloudLookup && !cloudLookups.includes(currentCloudLookup)) {
        await ctx.State.EaCKV.delete([
          'User',
          ctx.State.Username!,
          'Current',
          'CloudLookup',
        ]);

        currentCloudLookup = null;

        currentResGroupLookup = null;
      }

      if (!currentCloudLookup && cloudLookups.length > 0) {
        currentCloudLookup = cloudLookups[0];

        await ctx.State.EaCKV.set(
          ['User', ctx.State.Username!, 'Current', 'CloudLookup'],
          currentCloudLookup,
        );
      }

      if (currentCloudLookup) {
        const resGroupLookups = Object.keys(
          ctx.State.EaC.Clouds![currentCloudLookup].ResourceGroups || {},
        );

        if (
          currentResGroupLookup &&
          !resGroupLookups.includes(currentResGroupLookup)
        ) {
          await ctx.State.EaCKV.delete([
            'User',
            ctx.State.Username!,
            'Current',
            'ResourceGroupLookup',
          ]);

          currentResGroupLookup = null;
        }

        if (!currentResGroupLookup && resGroupLookups.length > 0) {
          currentResGroupLookup = resGroupLookups[0];

          await ctx.State.EaCKV.set(
            ['User', ctx.State.Username!, 'Current', 'ResourceGroupLookup'],
            currentResGroupLookup,
          );
        }
      }

      ctx.State.CloudLookup = currentCloudLookup || undefined;

      ctx.State.ResourceGroupLookup = currentResGroupLookup || undefined;
    }

    if (ctx.State.Username) {
      const providerLookup = 'azure';

      const provider = ctx.Runtime.EaC!.Providers![providerLookup]!;

      const providerDetails = provider.Details as EaCAzureADProviderDetails;

      const oAuthConfig = createAzureADOAuthConfig(
        providerDetails!.ClientID,
        providerDetails!.ClientSecret,
        providerDetails!.TenantID,
        providerDetails!.Scopes,
      );

      const helpers = createOAuthHelpers(oAuthConfig);

      const sessionId = await helpers.getSessionId(req);

      const oauthKv = await ctx.Runtime.IoC.Resolve<Deno.Kv>(
        Deno.Kv,
        provider.DatabaseLookup,
      );

      const currentAccTok = await oauthKv.get<string>([
        'MSAL',
        'Session',
        sessionId!,
        'AccessToken',
      ]);

      if (currentAccTok.value) {
        const eacAzureSvc = await loadEaCAzureAPISvc(ctx.State.EaCJWT!);

        try {
          await eacAzureSvc.Azure.Tenants(currentAccTok.value!);

          ctx.State.AzureAccessToken = currentAccTok.value;
        } catch (err) {
          ctx.Runtime.Logs.Package.warn('AzureAccessToken not working.');
          ctx.Runtime.Logs.Package.warn(err);
        }
      }
    }

    const resp = ctx.Next();

    return resp;
  };
}
