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

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
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

  console.info(`🧩🧩🧩___CREATE___PAGES____🧩🧩🧩`)
  console.info(JSON.stringify(result, null, 2))

  const { edges } = result.data.allMdx

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

    } else if (_(edge, 'node.frontmatter.template') === 'partial') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: { slug: edge.node.fields.slug }
      })
    }
  })

  // Feeds
  await TagsPages(graphql, actions)
  await CategoriesPages(graphql, actions)
  await PostsPages(graphql, actions)
}

module.exports = createPages
