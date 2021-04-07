module.exports = function (api) {
  api.cache(true)

  const presets = [
    // 'env',
    // 'react',
    // [`@babel/preset-env`, { 'useBuiltIns': `usage`, 'corejs': `2` }],
    // [`@babel/preset-react`, { 'development': true, minify: true }],
    ['babel-preset-gatsby', { targets: { browsers: ['>0.25%', 'not dead'] } }]
  ]

  const plugins = [
    'dynamic-import-webpack',
    // `@loadable/babel-plugin`,
    '@babel/plugin-syntax-dynamic-import'
  ]

  return { presets, plugins }
}
