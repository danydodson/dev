const path = require('path')
const _ = require('lodash')
const moment = require('moment')
const { siteConfig } = require('./src/config')
const { createFilePath } = require('gatsby-source-filesystem')

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
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
      createNodeField({
        node,
        name: 'date',
        value: date.toISOString(),
      })
    }
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const PostTemplate = path.resolve('src/templates/post.js')
  const CategoryPage = path.resolve('src/templates/category.jsx')
  const TagPage = path.resolve('src/templates/tag.jsx')

  const res = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
              date
              draft
              excerpt
              category
              type
              tags
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    console.error(res.errors)
    return Promise.reject(res.errors)
  }

  console.info(JSON.stringify(res, null, 4))

  const tagSet = new Set()
  const categorySet = new Set()

  const { edges } = res.data.allMdx

  const isDraft = edges => edges.frontmatter.draft === true
  const isPartial = edges => edges.frontmatter.type === 'partial'

  // Skip node if it's about, draft, or dummy post
  const skipNode = edges => isDraft(edges) || isPartial(edges)

  // Get next available next node
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

  // Get next available prev node
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

  return edges.forEach((edge, index) => {
    const { node } = edge
    // Generate a list of tags
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }

    // Generate a list of categories
    if (node.frontmatter.category) {
      categorySet.add(node.frontmatter.category)
    }

    const next = getNextAvailableNode(edges, index - 1)
    const prev = getPrevAvailableNode(edges, index + 1)

    // Create page for single post
    if (node.fields.slug !== '/__do-not-remove/') {
      createPage({
        path: node.fields.slug,
        component: PostTemplate,
        context: {
          slug: node.fields.slug,
          next,
          prev,
        },
      })
    }
  })

  //  Create tag pages
  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: TagPage,
      context: { tag },
    })
  })

  // Create category pages
  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: CategoryPage,
      context: { category },
    })
  })
}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null()
          }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '~media': path.resolve(__dirname, 'src/media'),
        '~cms': path.resolve(__dirname, 'cms'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~config': path.resolve(__dirname, 'src/config'),
        '~constants': path.resolve(__dirname, 'src/constants'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~templates': path.resolve(__dirname, 'src/templates'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~static': path.resolve(__dirname, 'static'),
      }
    }
  })
}
