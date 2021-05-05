require("dotenv").config({ path: ".env" })

const path = require("path")
const { siteConfig } = require("./src/config")

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-remark-emoji",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "code",
        path: `${__dirname}/content/code`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${siteConfig.githubToken}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "code-title-custom",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "anchor-heading",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: `${__dirname}/content`,
              ignoreFileExtensions: [
                "png",
                "jpg",
                "webp",
                "jpeg",
                "bmp",
                "tiff",
              ],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "anchor-heading",
            },
          },
          "gatsby-remark-smartypants",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs",
        ],
      },
    },
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: siteConfig.startUrl,
        theme_color: siteConfig.themeColor,
        background_color: siteConfig.backgroundColor,
        icon: siteConfig.faviconSrc,
        display: "minimal-ui",
        icon: `src/assets/imgs/icon-512x.png`,
        screenshots: [
          {
            src: "imgs/screenshot-1.png",
            type: "image/png",
            sizes: "540x720",
          },
          {
            src: "imgs/screenshot-2.png",
            type: "image/png",
            sizes: "540x720",
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     stages: ['develop'],
    //     extensions: ['js', 'jsx'],
    //     exclude: ['node_modules', '.cache', 'public']
    //   }
    // },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query:
          '{ site { siteMetadata { siteUrl: siteUrl } } allSitePage(filter: { path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" } }) { edges { node { path } } } }',
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: "daily",
            priority: 0.7,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|[^:]static\/)/,
              handler: "CacheFirst",
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: "StaleWhileRevalidate",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })),
            query: `
              {
                allMdx( sort: { fields: [frontmatter___date], order: DESC } ) {
                  edges {
                    node {
                      body
                      excerpt
                      html
                      timeToRead
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        cover {
                          childrenImageSharp {
                            gatsbyImageData(
                              aspectRatio: 1.3
                            )
                          }
                        }
                        date
                        tags
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Danys Dev RSS",
          },
        ],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: siteConfig.sentryDsn,
        sampleRate: 0.7,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: siteConfig.google.trackingId,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-datadog',
    //   options: {
    //     logs: {
    //       clientToken: siteConfig.datadog.clientToken,
    //       site: 'datadoghq.com',
    //       sampleRate: 100,
    //       enabled: true
    //     }
    //   }
    // },
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    FUNCTIONS: true,
  },
}
