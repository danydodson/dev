module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'no-console': 0
  }
}
