module.exports = {
  parser: 'babel-eslint', // uses babel-eslint transforms
  parserOptions: {
    // ecmaVersion: 2020,
    // sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  },
  env: {
    browser: true,
    es2021: true,
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    'plugin:mdx/recommended',
  ],
  plugins: [
    'eslint',
    'react',
    'mdx',
  ],
  rules: {
    'mdx/code-blocks': 0,
    'mdx/no-unused-expressions': 0,
    // 
    // 'no-unused-vars': 0,
    // 'no-unreachable': 0,
    // 
    'react/prop-types': 0,
    'react/no-deprecated': 0,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    // 
    'react/jsx-key': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    // 
    'object-curly-spacing': [2, 'always'],
  }
}
