module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    'react',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'no-unused-vars': 1,
    'no-unreachable': 1,
    'object-curly-spacing': [1, 'always'],
    'react/prop-types': 0,
    'react/no-deprecated': 1,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 1,
    'react/jsx-key': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  }
}