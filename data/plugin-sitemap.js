const sitemap = {
  resolve: 'gatsby-plugin-sitemap',
  options: {
    query: `{
        site {
          siteMetadata {
            siteUrl: url
          }
        }
        allSitePage(
          filter: {
            path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
          }
        ) {
          edges {
            node {
              path
            }
          }
        }
      }
    `,
    output: '/sitemap.xml',
    serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => ({
      url: site.siteMetadata.siteUrl + edge.node.path,
      changefreq: 'daily',
      priority: 0.7
    }))
  }
}

module.exports = sitemap