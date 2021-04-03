const path = require('path')
const _ = require('lodash')

const createCategoriesPages = require('./categories.js')
const createTagsPages = require('./tags.js')
const createPostsPages = require('./posts.js')

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
    component: path.resolve('./src/templates/tags-list.js')
  })

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list.js')
  })

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page.js'),
        context: { slug: edge.node.fields.slug }
      })
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: { slug: edge.node.fields.slug }
      })
    }
  })

  // Feeds
  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages
