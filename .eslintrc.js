module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@i18next/recommended', 'plugin:storybook/recommended'],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint', 'i18next'],
  'rules': {
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
    'indent': [2, 'tab'],
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true
    }],
    'max-len': ['error', {
      ignoreComments: true
    }]
  },
  globals: {
    '__IS_DEV__': true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};