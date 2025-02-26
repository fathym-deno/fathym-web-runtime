import { EaCModuleActuators } from '@fathym/eac';

export const eacActuators: EaCModuleActuators = {
  $Force: true,
  Clouds: {
    APIPath: 'http://localhost:5500/api/steward/clouds/azure',
    Order: 100,
  },
  DevOpsActions: {
    APIPath: 'http://localhost:5500/api/eac/handlers/devops-actions',
    Order: 400,
  },
  GitHubApps: {
    APIPath: 'http://localhost:5500/api/eac/handlers/github-apps',
    Order: 100,
  },
  IoT: {
    APIPath: 'http://localhost:5500/api/eac/handlers/iot',
    Order: 200,
  },
  Licenses: {
    APIPath: 'http://localhost:5500/api/eac/handlers/licenses',
    Order: 200,
  },
  Secrets: {
    APIPath: 'http://localhost:5500/api/steward/secrets/azure',
    Order: 300,
  },
  SourceConnections: {
    APIPath: 'http://localhost:5500/api/eac/handlers/source-connections',
    Order: 300,
  },
  Sources: {
    APIPath: 'http://localhost:5500/api/eac/handlers/sources',
    Order: 500,
  },
} as unknown as EaCModuleActuators;
