const rss = {
  resolve: 'gatsby-plugin-feed',
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
          allMdx.edges.map(edge => ({
            ...edge.node.frontmatter,
            description: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.siteUrl + edge.node.fields.slug,
            guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
            custom_elements: [{ 'content:encoded': edge.node.html }]
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
        output: '/rss.xml',
        title: 'Danys Dev RSS'
      }
    ]
  }
}

module.exports = rss
