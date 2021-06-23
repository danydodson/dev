const mdx = require('./gatsby/plugins/mdx')
const transformer_sharp = require('./gatsby/plugins/transformer')
const manifest = require('./gatsby/plugins/manifest')
const feed = require('./gatsby/plugins/feed')
const analytics = require('./gatsby/plugins/analytics')
const config = require('./src/config')

module.exports = {
  siteMetadata: config,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-robots-txt`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-offline`,
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-remark-emoji',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    mdx,
    transformer_sharp,
    feed,
    manifest,
    analytics
  ]
}
