import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: '#00ff00',
      },
    },
  },
  plugins: [],
} satisfies Omit<Config, 'content'>;
