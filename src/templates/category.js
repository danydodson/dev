import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/Posts/PostList'
import config from '../config'

/**
 * @param  {} {pageContext}
 * @param  {} {data}
 */
const CategoryTemplate = function ({ pageContext, data }) {
  const { category } = pageContext
  const postEdges = data.allMdx.edges

  return <Layout showTitle>{/* <PostList postEdges={postEdges} /> */}</Layout>
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
            type
            tags
          }
        }
      }
    }
  }
`
