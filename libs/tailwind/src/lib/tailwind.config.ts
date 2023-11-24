import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        quinary: 'var(--quinary)',
        senary: 'var(--senary)',
        septenary: 'var(--septenary)',
        octonary: 'var(--octonary)',
        nonary: 'var(--nonary)',
        denary: 'var(--denary)',
        black: 'var(--black)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
} satisfies Omit<Config, 'content'>;
