module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules',
    '.idea',
    'coverage',
    'dist',
    '.eslintrc.js',
    '.stylelintrc.js',
    'docs',
    'src/main.ts',
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
  },
};
