const path = require('path')
const moment = require('moment')
const { createFilePath } = require('gatsby-source-filesystem')
const config = require('./src/config')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content',
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
      const date = moment(node.frontmatter.date, config.dateFromFormat)
      createNodeField({
        node,
        name: 'date',
        value: date.toISOString(),
      })
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const PostTemplate = path.resolve('src/templates/post.js')
  const CategoryPage = path.resolve('src/templates/category.js')
  const TagPage = path.resolve('src/templates/tag.js')

  const response = await graphql(`
    {
      allMdx(
        limit: 1000,
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
            frontmatter {
              title
              date
              category
              excerpt
              draft
              title
              tags
              type
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`🙅 🚫 → ${response.errors}`)
    return Promise.reject(response.errors)
  }

  console.info(JSON.stringify(response, null, 2))

  const { edges } = response.data.allMdx

  const isDraft = edges => edges.frontmatter.draft === true
  const skipNode = edges => isDraft(edges)

  const tagSet = new Set()
  const categorySet = new Set()

  return edges.forEach((edge, index) => {
    const { node } = edge

    // Get next available next node
    const getNextAvailableNode = (edges, index) => {
      let returnValue
      for (let i = index; i > 0; i--) {
        if (!skipNode(edges[i].node)) {
          returnValue = edges[i].node
          break
        }
      }
      return returnValue
    }

    // Get next available prev node
    const getPrevAvailableNode = (edges, index) => {
      let returnValue
      for (let i = index; i < edges.length - 1; i++) {
        if (!skipNode(edges[i].node)) {
          returnValue = edges[i].node
          break
        }
      }
      return returnValue
    }
    
    const next = getNextAvailableNode(edges, index - 1)
    const prev = getPrevAvailableNode(edges, index + 1)

    // Create page for single post
    createPage({
      path: node.fields.slug,
      component: PostTemplate,
      context: {
        slug: node.fields.slug,
        next,
        prev,
      },
    })

    // Generate a list of tags
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }

    // Create tag pages
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: TagPage,
        context: { tag },
      })
    })

    // Generate a list of categories
    if (node.frontmatter.category) {
      categorySet.add(node.frontmatter.category)
    }

    // Create category pages
    categorySet.forEach(category => {
      createPage({
        path: `/categories/${category}/`,
        component: CategoryPage,
        context: { category },
      })
    })

  })

}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [{}]
      }
    })
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  })
}
