module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  ignoreFiles: ['.idea', '.cache', 'dist', 'node_modules', 'coverage', 'docs'],
  configBasedir: '.',
  plugins: ['stylelint-use-logical'],
  rules: {
    'selector-class-pattern': '^[A-Z][a-zA-Z0-9]*(?:-[A-Z][a-zA-Z0-9]*)*$|^-?[a-z][a-zA-Z0-9]*(?:-[a-z0-9][a-zA-Z0-9]*)?$',
    'csstools/use-logical': 'always',
    'prettier/prettier': true,
  },
};
