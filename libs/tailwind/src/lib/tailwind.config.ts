import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';
import colors from './base/colors';
import buttons from './components/buttons';

export default {
  theme: {
    colors: {
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [
    forms,
    aspectRatio,
    createThemes(
      ({ light, dark }) => ({
        light: light({
          primary: colors.cyan,
          secondary: colors.fuchsia,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
        dark: dark({
          primary: colors.violet,
          secondary: colors.teal,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
        halloween: {
          primary: colors.orange,
          secondary: colors.purple,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        },
      }),
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
        strict: true,
      },
    ),
    plugin(({ addComponents }) => {
      addComponents(buttons);
    }),
  ],
} satisfies Omit<Config, 'content'>;
