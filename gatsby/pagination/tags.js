const path = require('path')
const _ = require('lodash')
const config = require('../../src/config')

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = config

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  _.each(result.data.allMdx.group, tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage)
    const tagSlug = `/tag/${_.kebabCase(tag.fieldValue)}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve('./src/templates/tag.js'),
        context: {
          tag: tag.fieldValue,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      })
    }
  })
}
