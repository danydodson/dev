module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    // 'airbnb',
    // 'prettier',
    // 'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  plugins: [
    'react',
    // 'prettier',
    'react-hooks'
  ],
  rules: {
    
    'no-console': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    
    'import/prefer-default-export': 0,
    'import/newline-after-import':0,
    'import/no-useless-path-segments':0,

    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'react/no-deprecated': 0,
    'react/forbid-prop-types':0,
    'react/require-default-props':0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}
