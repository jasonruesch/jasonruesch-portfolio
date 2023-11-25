export default {
  '.btn-primary, .btn-secondary': {
    '@apply rounded-md px-3 py-2 text-sm font-semibold shadow-sm': '',

    '&.btn-small': {
      '@apply rounded px-2 py-1 text-xs': '',
    },
  },

  '.btn-primary': {
    '@apply bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500':
      '',
  },
  '.btn-secondary': {
    '@apply bg-white text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:ring-0':
      '',
  },
};
