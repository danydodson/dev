const config = require('../../src/config')

const gatsby_plugin_manifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: config.title,
    short_name: config.shortName,
    description: config.description,
    start_url: config.startUrl,
    display: 'minimal-ui',
    background_color: config.backgroundColor,
    theme_color: config.themeColor,
    icon: config.favicon
  }
}

module.exports = gatsby_plugin_manifest
