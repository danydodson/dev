const path = require('path')
// const config = require('./src/config')
// const moment = require('moment')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'Mdx') {
//     const slug = createFilePath({ node, getNode, basePath: '' })

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })

//     if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
//       const date = moment(node.frontmatter.date, config.dateFromFormat)
//       createNodeField({
//         node,
//         name: 'date',
//         value: date.toISOString(),
//       })
//     }
//   }
// }

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const PostTemplate = path.resolve('src/templates/post.js')
//   const TagTemplate = path.resolve('src/templates/tag.js')

//   const res = await graphql(`
//     {
//       allMdx(
//         limit: 1000,
//         sort: { fields: [frontmatter___date], order: DESC }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//               date
//             }
//             frontmatter {
//               template
//               draft
//               title
//               slug
//               date
//               category
//               excerpt
//               title
//               tags
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (res.errors) {
//     reporter.panicOnBuild(`🙅 🚫 → ${res.errors}`)
//     return Promise.reject(res.errors)
//   }

//   // console.info(JSON.stringify(res, null, 2))

//   const { edges } = res.data.allMdx

//   return edges.forEach((edge, index) => {
//     const { node } = edge

//     createPostPages(createPage, PostTemplate, node, edges, index)

//     const tagSet = new Set()
//     createTagList(node, tagSet)
//     createTagPages(tagSet, createPage, TagTemplate)
//   })

// }

// const createPostPages = (createPage, postTemplate, node, edges, index) => {
//   createPage({
//     path: node.fields.slug,
//     component: postTemplate,
//     context: {
//       slug: node.fields.slug,
//       next: getNextAvailableNode(edges, index - 1),
//       prev: getPrevAvailableNode(edges, index + 1),
//     },
//   })
// }

// const getNextAvailableNode = (edges, index) => {
//   let res
//   for (let i = index; i > 0; i--) {
//     if (!skipNode(edges[i].node)) {
//       res = edges[i].node
//       break
//     }
//   }
//   return res
// }

// const getPrevAvailableNode = (edges, index) => {
//   let res
//   for (let i = index; i < edges.length - 1; i++) {
//     if (!skipNode(edges[i].node)) {
//       res = edges[i].node
//       break
//     }
//   }
//   return res
// }

// const isDraft = (node) => {
//   return node.frontmatter.draft === true
// }

// const isAboutPage = (node) => {
//   return node.fields.slug === '/info/about/'
// }

// const skipNode = (node) => {
//   return isDraft(node) || isAboutPage(node)
// }

// const createTagList = (node, tagSet) => {
//   if (node.frontmatter.tags) {
//     node.frontmatter.tags.forEach(tag => {
//       tagSet.add(tag)
//     })
//   }
// }

// const createTagPages = (tagSet, createPage, tagPage) => {
//   tagSet.forEach(tag => {
//     createPage({
//       path: `/tags/${tag}/`,
//       component: tagPage,
//       context: {
//         tag
//       },
//     })
//   })
// }

exports.onCreateWebpackConfig = ({ actions }) => {

  // if (stage === 'develop') {
  //   actions.setWebpackConfig({
  //     devtool: 'source-map'
  //   })
  // }

  // if (stage === 'production') {
  //   actions.setWebpackConfig({
  //     devtool: false
  //   })
  // }

  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~content': path.resolve(__dirname, 'content'),
        '~gatsby': path.resolve(__dirname, 'gatsby'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~config': path.resolve(__dirname, 'src/config'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~templates': path.resolve(__dirname, 'src/templates'),
        '~utils': path.resolve(__dirname, 'src/utils')
      }
    },
  })

}

exports.createPages = require('./gatsby/create-pages')
exports.onCreateNode = require('./gatsby/create-node')
