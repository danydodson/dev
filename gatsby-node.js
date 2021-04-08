const path = require('path')
const _ = require('lodash')
const moment = require('moment')
const siteConfig = require('./data/site-config')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'src/content'
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
      createNodeField({
        node,
        name: 'date',
        value: date.toISOString()
      })
    }
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const PostTemplate = path.resolve('src/templates/post.js')
  const TagPage = path.resolve('src/templates/tag.jsx')
  const CategoryPage = path.resolve('src/templates/category.jsx')

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
  const isCodePage = edges => edges.frontmatter.type === 'snippet'
  const isAboutPage = edges => edges.fields.slug === '/pages/about/'
  const isContactPage = edges => edges.fields.slug === '/pages/contact/'
  const isCVPage = edges => edges.fields.slug === '/pages/resume/'

  // Skip node if it's about, draft, or dummy post
  const skipNode = edges => isAboutPage(edges) || isContactPage(edges) || isCVPage(edges) || isDraft(edges)

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
      node.frontmatter.tags.forEach(tag => {
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
          prev
        }
      })
    }
  })

  //  Create tag pages
  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: TagPage,
      context: { tag }
    })
  })

  // Create category pages
  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: CategoryPage,
      context: { category }
    })
  })
}
