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
        ['~content', './content'],
        ['~gatsby', './gatsby'],
        ['~assets', './src/assets'],
        ['~components', './src/components'],
        ['~hooks', './src/hooks'],
        ['~pages', './src/pages'],
        ['~styles', './src/styles'],
        ['~templates', './src/templates'],
        ['~utils', './src/utils'],
        ['~config', './src/config.js']
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
