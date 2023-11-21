module.exports = {
  '{apps,libs}/**/*.{ts,tsx,js,jsx,html,json,scss,css,md}': [
    'nx affected:lint --uncommitted --fix true',
    // 'nx affected:test --uncommitted',
  ],
  '*.{ts,tsx,js,jsx,html,json,scss,css,md,yaml,yml}': [
    'nx format:write --base=main',
  ],
};
