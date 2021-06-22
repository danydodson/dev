const config = require('../../src/config')

const gatsby_plugin_mdx = {
  resolve: 'gatsby-plugin-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-code-titles',
        options: {
          className: 'code-title-custom',
        },
      },
      {
        resolve: 'gatsby-remark-relative-images',
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: config.maxWidth,
          backgroundColor: 'transparent',
          linkImagesToOriginal: false,
        },
      },
      {
        resolve: 'gatsby-remark-responsive-iframe',
      },
      {
        resolve: 'gatsby-remark-autolink-headers',
        options: {
          className: 'anchor-heading',
        },
      },
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: `${__dirname}/content`,
          ignoreFileExtensions: ['png', 'jpg', 'webp', 'jpeg', 'bmp', 'tiff'],
        },
      },
    ],
  },
}

module.exports = gatsby_plugin_mdx
