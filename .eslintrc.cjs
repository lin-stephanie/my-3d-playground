module.exports = {
  root: true,

  env: { browser: true, es2022: true },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', '_assets'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },

  plugins: ['react-refresh'],

  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // https://github.com/pmndrs/react-three-fiber/issues/2623
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'map',
          'intensity',
          'position',
          'rotation',
          'geometry',
          'material',
          'matcap',
          'castShadow',
          'receiveShadow',
          'raycast',
          'side',
        ],
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
