import { type Config } from 'tailwindcss';
import unimportant from 'tailwindcss/unimportant';

export default {
  content: [],
  plugins: [unimportant],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00A3FF',
        'neon-green': '#00FF87',
        'dark-bg': '#0A1F44',
        'dark-accent': '#0E2A5A',
        'card-bg': '#112E60',
      },
    },
  },
} satisfies Config;
