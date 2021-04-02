const siteConfig = require("./data/site-config")
const rss = require("./data/gatsby-rss")

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-remark-emoji`, // Emoji list: https://emojipedia.org/joypixels/
    rss,

    // Read markdown/mdx files
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },

    // Read images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },

    // ???
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `dummy`,
        path: `${__dirname}/src/z_`,
      },
    },

    // mdx support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // Adding title to code blocks. Usage: ```js:title=example.js
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "code-title-custom",
            },
          },

          // Process images in markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`,
            },
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/posts`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },

    // Using svg as component
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },

    // {
    //   resolve: `gatsby-transformer-sharp`,
    //   options: {
    //     // Removes warnings trying to use non-gatsby image in markdown
    //     checkSupportedExtensions: false,
    //   },
    // },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.gaTrackingId,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          // Somehow need to be defined under both gatsby-plugin-mdx & gatsby-transformer-remark to work
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
        ],
      },
    },

    // 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.siteTitle,
        short_name: siteConfig.siteTitleShort,
        description: siteConfig.siteDescription,
        start_url: siteConfig.pathPrefix,
        display: 'minimal-ui',
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        icon: siteConfig.faviconSrc,
        icons: [
          {
            src: '/icons/maskable-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ],
        screenshots: [
          {
            src: '/snaps/snap-1.png',
            type: 'image/png',
            sizes: '540x720'
          },
          {
            src: '/snaps/snap-2.jpg',
            type: 'image/jpg',
            sizes: '540x720'
          }
        ]
      },
    },
  ],
}
