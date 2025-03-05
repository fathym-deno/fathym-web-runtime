import { ComponentChildren, JSX } from 'preact';
import { Action, ActionStyleTypes, Header, Logo } from '@fathym/atomic-design-kit';

export type SiteFrameProps = {
  children: ComponentChildren;
  title?: string;
} & Omit<JSX.HTMLAttributes<HTMLElement>, 'title'>;

export default function SiteFrame({ children, title }: SiteFrameProps) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title || 'OpenIndustrial - AI Execution'}</title>

        <link rel='shortcut icon' type='image/png' href='/thinky.png' />

        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
          rel='stylesheet'
        />

        <link
          rel='stylesheet'
          href={`/tailwind/styles.css`}
          data-eac-bypass-base
        />
      </head>

      <body class='bg-[#0A1F44] text-white font-inter'>
        <div class='flex flex-col h-screen'>
          <Header
            class='h-[64px] text-center py-4 text-neon-blue text-2xl font-bold glow'
            logo={
              <Action
                href='/'
                actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
              >
                <Logo />
              </Action>
            }
          />

          <main class='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
