import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

const TagTemplate = function({ pageContext, data }) {
  const { tag } = pageContext
  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <ul className='post-tags-list'>
        {postEdges.map(({ node }) => {
          const { title, date, slug, tags } = node.frontmatter
          return (
            <li key={slug}>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>
              <p className='post-tags-list-subtitle'>
                <time>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>&nbsp;&mdash;&nbsp;</span>
                {tags &&
                  tags.length > 0 &&
                  tags.map((tag, i) => (
                    <Link
                      key={i}
                      to={`/tags/${tag}/`}
                      className='post-tags-list-tag'
                    >
                      #{tag}
                    </Link>
                  ))}
              </p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagsByPath($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            slug
            tags
          }
        }
      }
    }
  }
`
