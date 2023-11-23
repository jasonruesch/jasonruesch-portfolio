import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: '#123456',
      },
    },
  },
  plugins: [],
} satisfies Omit<Config, 'content'>;
