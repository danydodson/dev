require('dotenv').config({ path: `.env.dev` })

const config = require('./config')
// const path = require('path')

module.exports = {
  siteMetadata: config,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-gatsby-cloud',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/featured`,
    //     name: 'featured',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/jobs`,
    //     name: 'jobs',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/projects`,
    //     name: `projects`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `static`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-emoji',
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-title-custom',
            },
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
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     // plugins: [
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: config.maxWidth,
    //           backgroundColor: 'transparent',
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //       },
    //       {
    //         resolve: 'gatsby-remark-autolink-headers',
    //         options: {
    //           className: 'anchor-heading',
    //         },
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-smartypants',
    //       'gatsby-remark-copy-linked-files',
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /media/,
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.google.trackingId,
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
        icon: config.favicon,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${config.gatsby.gitToken}`,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query:
    //       '{ site { siteMetadata { siteUrl: siteUrl } } allSitePage(filter: { path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" } }) { edges { node { path } } } }',
    //     output: '/sitemap.xml',
    //     serialize: ({ site, allSitePage }) =>
    //       allSitePage.edges.map((edge) => ({
    //         url: site.siteMetadata.siteUrl + edge.node.path,
    //         changefreq: 'daily',
    //         priority: 0.7,
    //       })),
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     workboxConfig: {
    //       runtimeCaching: [
    //         {
    //           urlPattern: /(\.js$|\.css$|[^:]static\/)/,
    //           handler: 'CacheFirst',
    //         },
    //         {
    //           urlPattern: /^https?:.*\/page-data\/.*\.json/,
    //           handler: 'StaleWhileRevalidate',
    //         },
    //         {
    //           urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //           handler: 'StaleWhileRevalidate',
    //         },
    //         {
    //           urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
    //           handler: 'StaleWhileRevalidate',
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMdx } }) =>
    //           allMdx.edges.map((edge) => ({
    //             ...edge.node.frontmatter,
    //             description: edge.node.excerpt,
    //             date: edge.node.frontmatter.date,
    //             url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //             guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //             custom_elements: [{ 'content:encoded': edge.node.html }],
    //           })),
    //         query: `
    //           {
    //             allMdx( sort: { fields: [frontmatter___date], order: DESC } ) {
    //               edges {
    //                 node {
    //                   body
    //                   excerpt
    //                   html
    //                   timeToRead
    //                   fields {
    //                     slug
    //                   }
    //                   frontmatter {
    //                     title
    //                     cover {
    //                       childrenImageSharp {
    //                         gatsbyImageData(
    //                           aspectRatio: 1.3
    //                         )
    //                       }
    //                     }
    //                     date
    //                     tags
    //                     excerpt
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: 'Danys Dev RSS',
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: path.resolve('src/cms/index.js'),
    //     enableIdentityWidget: true,
    //     publicPath: 'admin',
    //     htmlTitle: 'Content Manager',
    //     includeRobots: false
    //   }
    // },
  ],
}
