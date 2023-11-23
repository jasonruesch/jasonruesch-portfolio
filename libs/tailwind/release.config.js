const srcRoot = `libs/tailwind`;

module.exports = {
  pkgRoot: `dist/${srcRoot}`,
  commitPaths: [
    'nx.json',
    '.nxignore',
    'package.json',
    '.prettierrc',
    '.prettierignore',
    `${srcRoot}/*`,
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          `${srcRoot}/CHANGELOG.md`,
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
