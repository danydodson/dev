module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:mdx/recommended',
    'plugin:md/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'mdx',
    'md',
    // 'prettier'
  ],
  settings: {
    react: { version: 'detect' },
    // 'mdx/code-blocks': true,
    // 'mdx/language-mapper': {},
    // 'mdx/remark': true
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
    },
    // {
    //   files: ['*.md'],
    //   rules: { 'prettier/prettier': [2, { parser: 'markdown' }] }
    // },
    // {
    //   files: ['*.mdx'],
    //   extends: ['plugin:mdx/overrides']
    // },
    // {
    //   files: '**/*.{md,mdx}/**',
    //   extends: 'plugin:mdx/code-blocks'
    // }
  ],
  rules: {
    // 'prettier/prettier': 1,
    // 
    // 'mdx/no-jsx-html-comments': 1,
    // 'mdx/no-unused-expressions': 1,
    // 
    'no-unused-vars': 0,
    'no-unreachable': 1,
    // 
    'object-curly-spacing': [1, 'always'],
    // 
    'react/prop-types': 0,
    'react/no-deprecated': 1,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 1,
    'react/jsx-key': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  },
  ignorePatterns: [
    '**/.cache',
    '**/cypress',
    '**/.vscode',
    '**/node_modules',
    '**/public',
    '**/.env.*',
    '**/*.log',
  ],
}