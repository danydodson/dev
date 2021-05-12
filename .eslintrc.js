module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // 'plugin:mdx/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    // 'mdx'
  ],
  settings: {
    react: { version: 'detect' },
    // 'mdx/code-blocks': true,
    // 'mdx/language-mapper': {},
    // 'mdx/remark': true
  },
  // overrides: [
  //   {
  //     files: ['*.md'],
  //     rules: { 'prettier/prettier': [2, { parser: 'markdown' }] }
  //   },
  //   {
  //     files: ['*.mdx'],
  //     extends: ['plugin:mdx/overrides']
  //   },
  //   {
  //     files: '**/*.{md,mdx}/**',
  //     extends: 'plugin:mdx/code-blocks'
  //   }
  // ],
  rules: {
    // 'mdx/no-jsx-html-comments': 1,
    // 'mdx/no-unused-expressions': 1,
    'no-unused-vars': 1,
    'no-unreachable': 1,
    'react/prop-types': 0,
    'react/no-deprecated': 1,
    'react/display-name': 0,
    'react/no-children-prop': 1,
    'react/react-in-jsx-scope': 1,
    'react/jsx-key': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'object-curly-spacing': [1, 'always']
  },
  // reportUnusedDisableDirectives: true,
}