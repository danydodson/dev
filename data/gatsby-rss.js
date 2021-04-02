const siteConfig = require('./site-config')

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
        serialize: ({ query: { site, allMarkdownRemark } }) => (
          allMarkdownRemark.edges.map((edge) => ({
            ...edge.node.frontmatter,
            description: edge.node.frontmatter.description,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.site_url + edge.node.fields.slug,
            guid: site.siteMetadata.site_url + edge.node.fields.slug,
            custom_elements: [{ 'content:encoded': edge.node.html }]
          }))
        ),
        query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  excerpt
                  html
                  timeToRead
                  fields { 
                    slug 
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
        output: '/rss.xml',
        title: siteConfig.title
      }
    ]
  }
}

module.exports = rss
