import { marked } from 'npm:marked@15.0.1';
import { Thinky, type ThinkyProps } from '@fathym/atomic-design-kit';

export const IsIsland = true;

export type EaCThinkyProps = ThinkyProps;

export default function EaCThinky({ children, ...props }: EaCThinkyProps) {
  return (
    <Thinky
      renderMessage={(msg) => {
        const markdown = msg.content?.toString() || '';
        return marked.parse(markdown) as string; // Parse Markdown into HTML
      }}
      {...props}
    >
      {children}
    </Thinky>
  );
}
