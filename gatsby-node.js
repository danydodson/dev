const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/content`
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/components/Posts/PostTemplate/index.js')

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              draft
              excerpt
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.error(result.errors)
      return Promise.reject(result.errors)
    }

    console.log(JSON.stringify(result, null, 4))

    // Create pages & register paths
    const { edges } = result.data.allMdx
    return edges.forEach((edge, i) => {
      const { node } = edge

      const prev = getPrevAvailableNode(edges, i + 1)
      const next = getNextAvailableNode(edges, i - 1)

      if (node.fields.slug !== '/posts/__do-not-remove/') {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug,
            prev,
            next
          }
        })
      }
    })
  })
}

// Get next available prev node that's not about, draft, and dummy post
const getPrevAvailableNode = (edges, index) => {
  let retVal

  for (let i = index; i < edges.length - 1; i++) {
    if (!skipNode(edges[i].node)) {
      retVal = edges[i].node
      break
    }
  }
  return retVal
}

const getNextAvailableNode = (edges, index) => {
  let retVal

  for (let i = index; i > 0; i--) {
    if (!skipNode(edges[i].node)) {
      retVal = edges[i].node
      break
    }
  }
  return retVal
}

// Skip node if it's about, draft, or dummy post
const skipNode = node => isAboutPage(node) || isDraft(node) || isDummy(node)

const isDraft = node => node.frontmatter.draft === true
const isAboutPage = node => node.fields.slug === '/about/'
const isDummy = node => node.frontmatter.tags && node.frontmatter.tags.includes('___dummy*')
