const path = require('path')
const siteConfig = require('./data/site-config')
const sitemap = require('./data/plugin-sitemap')
const feed = require('./data/plugin-feed')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-emoji`,
    feed,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: path.resolve('src/cms/index.js'),
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        includeRobots: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-title-custom'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/content`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.gaTrackingId
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`
            }
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.titleShort,
        description: siteConfig.description,
        start_url: siteConfig.startUrl,
        display: 'minimal-ui',
        background_color: siteConfig.bgColor,
        theme_color: siteConfig.themeColor,
        icon: siteConfig.faviconSrc,
        icons: [
          {
            src: 'icons/maskable-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],

        /* Images used by pwa stores
        ============================= */
        screenshots: [
          {
            src: 'images/home-1.png',
            type: 'image/png',
            sizes: '540x720'
          },
          {
            src: 'images/home-2.jpg',
            type: 'image/jpg',
            sizes: '540x720'
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     implementation: require('sass'),
    //     postCssPlugins: [...postCssPlugins],
    //     cssLoaderOptions: {
    //       camelCase: false
    //     }
    //   }
    // },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        sampleRate: 0.7,
      },
    }
  ]
}
