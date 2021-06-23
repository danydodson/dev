const path = require('path')
const _ = require('lodash')

const CategoriesPages = require('./pagination/categories-pages')
const TagsPages = require('./pagination/tags-pages')
const PostsPages = require('./pagination/posts-pages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js')
  })

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tag.js')
  })

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/category.js')
  })

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
              title
              category
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  console.info(JSON.stringify(result, null, 2))

  const { edges } = result.data.allMdx

  _.each(edges, (edge, i) => {

    const next = getNextAvailableNode(edges, i - 1)
    const prev = getPrevAvailableNode(edges, i + 1)

    if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: edge.node.fields.slug,
          next,
          prev,
        }
      })

    }
  })

  // Feeds
  await TagsPages(graphql, actions)
  await CategoriesPages(graphql, actions)
  await PostsPages(graphql, actions)
}

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

const skipNode = node => {
  return isAboutPage(node) || isDraft(node)
}

const isAboutPage = node => {
  return node.frontmatter.category === 'profile'
}

const isDraft = node => {
  return node.frontmatter.draft === true
}


module.exports = createPages
