const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {

  actions.setWebpackConfig({ devtool: 'eval-source-map' })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~content': path.resolve(__dirname, 'content'),
        '~gatsby': path.resolve(__dirname, 'gatsby'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~config': path.resolve(__dirname, 'src/config'),
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

exports.createPages = require('./gatsby/create-page')

exports.onCreateNode = require('./gatsby/create-node')

