const path = require('path')

const gatsby_plugin_netlify_cms = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: path.resolve('src/cms/index.js'),
    enableIdentityWidget: true,
    publicPath: 'admin',
    htmlTitle: 'Content Manager',
    includeRobots: false
  }
}

module.exports = gatsby_plugin_netlify_cms
