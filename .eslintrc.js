module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  rules: {
    'no-unused-vars': 0,
    'no-unreachable': 0,
    'react/prop-types': 0,
    'react/no-deprecated': 0,
    'react/jsx-key': 0,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    'object-curly-spacing': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }]
  }
}
