const path = require('path')
const config = require('../../src/config')

// TODO this method creates a single post. create a different method that creates a single post ???

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `)

  const { loadsPer } = config
  const numPages = Math.ceil(result.data.allMdx.totalCount / loadsPer)

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('./src/pages/index.js'),
      context: {
        currentPage: i,
        postsLimit: loadsPer,
        postsOffset: i * loadsPer,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    })
  }
}
