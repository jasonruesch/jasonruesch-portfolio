const srcRoot = `libs/tailwind`;

module.exports = {
  branches: ['main'],
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
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/CHANGELOG.md`],
      },
    ],
  ],
};
