module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  rules: {
    'no-unused-expressions': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'import/extensions': ['error', { js: 'never' }],
    'import/no-named-default': 'off',
  },
  settings: {
    'import/resolver': 'webpack',
  },
  env: {
    browser: true,
    mocha: true,
  },
};
