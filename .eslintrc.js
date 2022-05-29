const basicRules = {
  'comma-dangle': [2, 'always-multiline'],
  'eol-last': [2, 'always'],
  'max-len': [
    2,
    {
      code: 100,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
    },
  ],
  quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'object-curly-spacing': [2, 'always'],
  'sort-imports': [2, { ignoreDeclarationSort: true }],

  'import/extensions': [2, 'never'],
  'import/no-extraneous-dependencies': [
    2,
    {
      devDependencies: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '.eslintrc.js',
        'rollup.config.js',
        '**/*.stories.tsx',
      ],
    },
  ],
  'import/namespace': [2, { allowComputed: true }],
  '@typescript-eslint/naming-convention': [
    1,
    {
      selector: 'typeLike',
      format: ['camelCase', 'PascalCase'],
    },
  ],
  'import/order': [
    2,
    {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],

  'react/jsx-indent-props': [2, 2],
  'react/jsx-sort-props': [2, {
    shorthandFirst: true,
    ignoreCase: true,
    callbacksLast: true,
  }],
  'react/jsx-wrap-multilines': [
    'error',
    { declaration: false, assignment: false },
  ],
  'react/require-default-props': 'warn',
  'import/no-cycle': 'warn',
  'react-hooks/exhaustive-deps': 'warn',

  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

  'arrow-parens': 'off',
  'class-methods-use-this': 'off',
  'guard-for-in': 'off',
  'no-restricted-syntax': 'off',
  'no-unused-vars': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-uses-react': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'spaced-comment': 'off',
  '@typescript-eslint/no-shadow': 'off',
};

const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  rules: basicRules,
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'no-param-reassign': 0,
      },
    },
  ],
};

// eslint-disable-next-line
console.log(config);

module.exports = config;