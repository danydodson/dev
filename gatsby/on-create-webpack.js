const path = require('path')

const onCreateWebpackConfig = ({ actions }) => {

  actions.setWebpackConfig({
    devtool: process.env.NODE_ENV === 'production'
      ? false
      : 'eval-source-map'
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~content': path.resolve(__dirname, 'content'),
        '~gatsby': path.resolve(__dirname, 'gatsby'),
        '~assets': path.resolve(__dirname, 'src/assets'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~templates': path.resolve(__dirname, 'src/templates'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~config': path.resolve(__dirname, 'src/config.js')
      }
    }
  })
}

module.exports = onCreateWebpackConfig
