module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    graphql: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks'
  ],
  rules: {
    'indent': ['error', 2],
    'semi': [2, 'never'],
    'quotes': [0, 'single'],
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'arrow-parens': [2, 'as-needed'],
    'no-unused-vars': 0,
    'no-unreachable': 0,
    'no-extra-boolean-cast': 0,
    'import/export': 0,
    'import/default': 2,
    'react/prop-types': 0,
    'react/no-deprecated': 0,
    'react/jsx-key': 0,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'no-const-assign': 0
    // 'eslintreact-hooks/exhaustive-deps': 0
  }
}
