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
    },
    'import/resolver': {
      alias: [
        ['~media', 'src/media'],
        ['~cms', 'cms'],
        ['~components', 'src/components'],
        ['~config', 'src/config'],
        ['~constants', 'src/constants'],
        ['~hooks', 'src/hooks'],
        ['~pages', 'src/pages'],
        ['~templates', 'src/templates'],
        ['~utils', 'src/utils'],
        ['~static', 'static'],
      ]
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
    'plugin:mdx/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  rules: {
    // "mdx/code-blocks": 0,
    // "mdx/language-mapper": {}, // optional, if you want to disable language mapper, set it to `false` if you want to override the default language mapper inside, you can provide your own
    'no-unused-vars': 0,
    'no-unreachable': 0,
    'react/prop-types': 0,
    'react/no-deprecated': 0,
    'react/jsx-key': 0,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    'object-curly-spacing': [2, 'always'],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }]
  }
}
