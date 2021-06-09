module.exports = {
  parser: 'babel-eslint',
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      alias: [
        ['~components', './src/components'],
        ['~config', './src/config'],
        ['~hooks', './src/hooks'],
        ['~images', './src/images'],
        ['~pages', './src/pages'],
        ['~styles', './src/styles'],
        ['~templates', './src/templates'],
        ['~utils', './src/utils']
      ]
    }
  },
  rules: {
    'react/jsx-key': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 1,
    'react/no-children-prop': 0
  }
}
