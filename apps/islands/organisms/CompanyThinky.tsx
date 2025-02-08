import { marked } from 'npm:marked@15.0.1';
import { Thinky, type ThinkyProps } from '@fathym/atomic-design-kit';

export const IsIsland = true;

export type CompanyThinkyProps = ThinkyProps;

export default function CompanyThinky(props: CompanyThinkyProps) {
  return (
    <Thinky
      renderMessage={(msg) => {
        const markdown = msg.content?.toString() || '';
        return marked.parse(markdown) as string;
      }}
      {...props}
    />
  );
}
