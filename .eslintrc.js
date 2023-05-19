module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-debugger': 'warn',

    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/consistent-type-exports': 'warn',
  },

  overrides: [
    {
      files: ['src/**/*.stories.tsx'],
      rules: { 'react/prop-types': 'off' },
    },
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
