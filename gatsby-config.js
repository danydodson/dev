const siteConfig = require('./data/site-config')
const rss = require('./data/rss')

module.exports = {
  /* SiteMetadata
  ===================================== */
  siteMetadata: siteConfig,

  plugins: [
    /* Manages document head data
    ===================================== */
    `gatsby-plugin-react-helmet`,

    /* Automatically creates a sitemap
    ===================================== */
    `gatsby-plugin-sitemap`,

    /* Support for styled components
    ===================================== */
    `gatsby-plugin-styled-components`,

    /* Avoids the browser having to refresh 
    the whole page when navigating local pages
    ===================================== */
    `gatsby-plugin-catch-links`,

    /* Support for making site work offline
    ===================================== */
    `gatsby-plugin-offline`,

    /* Processes images in markdown
    ===================================== */
    'gatsby-plugin-image',

    /* For image processing functions
    ===================================== */
    `gatsby-plugin-sharp`,

    /* Handles Scss/Sass files
    ===================================== */
    `gatsby-plugin-sass`,

    /* Slack-style emojis in markdown
    ===================================== */
    `gatsby-remark-emoji`,

    /* Read markdown/mdx post files
    ===================================== */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content`
      }
    },

    /* Get static files
    ===================================== */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`
      }
    },

    /* ???
    ===================================== */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `dummy`,
        path: `${__dirname}/src/dummy`
      }
    },

    /* MDX support
    ===================================== */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [

          /* Adding title to code blocks. Usage: ```js:title=example.js
          ============================================================ */
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-title-custom'
            }
          },

          /* Process images in markdown
          ===================================== */
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false
            }
          },

          /* Adds github-style hover links to headers in markdown files
          ============================================================= */
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`
            }
          },

          /* Copies local files linked to/from md files to the root dir (i.e., public folder)
          =================================================================================== */
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

    /* Adds svg-react-loader to gatsby webpack config
    ================================================== */
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },

    {
      /* Creates ImageSharp nodes from image
      ======================================= */
      resolve: `gatsby-transformer-sharp`,
      options: {
        /* Removes warnings trying to use non-gatsby image in markdown
        =============================================================== */
        checkSupportedExtensions: false,
      },
    },

    /* Adds google analytics
    =========================================== */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.gaTrackingId
      }
    },

    /* Parses Markdown files using Remark
    ====================================== */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [

          /* Convert image src(s) in markdown/html/frontmatter 
          to be relative to their node's parent directory
          ==================================================== */
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

          /* Wraps iframes or objects (e.g. embedded YouTube videos)
          within markdown files in a responsive elastic container with a fixed aspect ratio
          ================================================================================== */
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },

          /* Somehow need to be defined under both 
          gatsby-plugin-mdx & gatsby-transformer-remark to work
          ===================================================== */
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`
            }
          },

          /* Copies local files linked to/from md files to the root dir (i.e., public folder)
          =================================================================================== */
          'gatsby-remark-copy-linked-files',

          /* Adds syntax highlighting to code blocks
          ===================================== */
          'gatsby-remark-prismjs'
        ]
      }
    },

    /* Web app manifest
    ===================================== */
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
        ========================================= */
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
    /* RSS feed
    ========================================= */
    rss,
  ]
}
