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
    {
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
    },
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-45666519-2',
      }
    }
  ]
}
