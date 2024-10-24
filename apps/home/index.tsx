import { ChatSet } from '@fathym/atomic';
import { EaCRuntimeHandlerResult, PageProps } from '@fathym/eac-runtime';
import Counter from '../islands/Counter.tsx';
import CompanyThinky from '../islands/organisms/CompanyThinky.tsx';
import { CompanyWebState } from '../../src/state/CompanyWebState.ts';

export const IsIsland = true;

type IndexPageData = {
  ActiveChat: string;
  Chats: Record<string, ChatSet>;
  JWT: string;
  Root: string;
  Name: string;
  Text: string;
};

export const handler: EaCRuntimeHandlerResult<CompanyWebState, IndexPageData> = {
  GET: async (_req, ctx) => {
    const resp = await fetch(`${Deno.env.get('API_ROOT')!}/state`);

    const { Random } = await resp.json() as { Random: string };

    return ctx.Render({
      Name: `The Random: ${Random}`,
      ActiveChat: Random,
      Chats: {
        [Random]: {
          Name: 'UR Workflows',
          CircuitLookup: 'company-chat:rag',
        },
      },
      JWT: '',
      Root: '/circuits/',
      Text: `We met the latest Random, ${Random}, at around ${ctx.State.CurrentDate}`,
    });
  },
};

export default function Index({ Data }: PageProps<IndexPageData>) {
  return (
    <CompanyThinky
      activeChat={Data.ActiveChat}
      chats={Data.Chats}
      jwt={Data.JWT}
      root={Data.Root}
    >
      <div class='py-16 px-4 bg-slate-500'>
        <div class='mx-auto block w-[350px] text-center'>
          <h1 class='text-4xl'>{Data.Name}</h1>
          <p class='text-lg'>{Data.Text}</p>

          <div class='flex flex-row py-8'>
            <Counter />
          </div>
        </div>
      </div>

      <div class='p-4'>
        <h2 class='text-2xl'>Welcome</h2>
      </div>
    </CompanyThinky>
  );
}
