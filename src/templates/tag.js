import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/Posts/PostList'
import { siteConfig } from '../../config'

const TagTemplate = function ({ pageContext, data }) {
  const { tag } = pageContext
  const postEdges = data.allMdx.edges

  return <Layout showTitle>{/* <PostList postEdges={postEdges} /> */}</Layout>
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
