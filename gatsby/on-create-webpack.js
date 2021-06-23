const path = require('path')

const onCreateWebpackConfig = ({ actions }) => {

  actions.setWebpackConfig({
    devtool: 'eval-source-map'
    // devtool: false
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~config': path.resolve(__dirname, 'src/config.js'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~templates': path.resolve(__dirname, 'src/templates'),
        '~utils': path.resolve(__dirname, 'src/utils')
      }
    }
  })
}

module.exports = onCreateWebpackConfig