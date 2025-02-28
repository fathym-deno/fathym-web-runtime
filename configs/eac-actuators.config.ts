import { EaCModuleActuators } from '@fathym/eac';

export const loadEaCActuators: () => EaCModuleActuators = () => {
  const base = Deno.env.get('EaCStewardClient_URL');

  return {
    $Force: true,
    Clouds: {
      APIPath: new URL('./clouds/azure', base),
      Order: 100,
    },
    DevOpsActions: {
      APIPath: new URL('./handlers/devops-actions', base),
      Order: 400,
    },
    GitHubApps: {
      APIPath: new URL('./handlers/github-apps', base),
      Order: 100,
    },
    IoT: {
      APIPath: new URL('./handlers/iot', base),
      Order: 200,
    },
    Licenses: {
      APIPath: new URL('./handlers/licenses', base),
      Order: 200,
    },
    Secrets: {
      APIPath: new URL('./secrets/azure', base),
      Order: 300,
    },
    SourceConnections: {
      APIPath: new URL('./handlers/source-connections', base),
      Order: 300,
    },
    Sources: {
      APIPath: new URL('./handlers/sources', base),
      Order: 500,
    },
  } as unknown as EaCModuleActuators;
};
