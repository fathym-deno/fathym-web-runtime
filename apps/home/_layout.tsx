import { PageProps } from '@fathym/eac-applications/runtime/preact';

export default function Layout({
  Data: _Data,
  Component,
  Revision,
}: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>Fathym EaC Runtime</title>

        <link rel='shortcut icon' type='image/png' href='/thinky.png' />
        <link
          rel='stylesheet'
          href={`/tailwind/styles.css?Revision=${Revision}`}
          data-eac-bypass-base
        />
      </head>

      <body class='bg-slate-50 dark:bg-slate-900 text-black dark:text-white'>
        <div
          class='relative w-screen h-screen bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/assets/background.png')`,
          }}
        >
          <Component />
        </div>
      </body>
    </html>
  );
}
