import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ToggleMode from '../components/Layout/ToggleMode'
import PostList from '../components/Posts/PostList'
import SEO from '../components/SEO'
import { siteConfig } from '../../src/config'

function LandingTemplate({ data }) {
  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <SEO />
      <div className='switch-container' style={{ textAlign: 'end', margin: '0 1.1rem' }}>
        <ToggleMode />
      </div>
      {/* <PostList postEdges={postEdges} /> */}
    </Layout>
  )
}

export default LandingTemplate

export const pageQuery = graphql`
  query LandingQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
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
