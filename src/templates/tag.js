import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import LocalDate from '../utils/date-helper'

const TagTemplate = function({ data }) {

  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <ul className='post-tags-list'>

        {postEdges &&
          postEdges.map(({ node }) => {
            const { title, date, slug, tags } = node.frontmatter
            return (
              <li key={slug}>

                <h2>
                  <Link to={`/posts/${slug}`}>{title}</Link>
                </h2>

                <sub className='post-tags-list-subtitle'>
                  
                  <LocalDate date={date} />

                  <span>&nbsp;&mdash;&nbsp;</span>

                  {tags &&
                    tags.length > 0 &&
                    tags.map((tag, i) => (
                      <Link
                        key={i}
                        to={`/tags/${tag}/`}
                        className='post-tags-list-tag'
                      >
                        #{tag}{' '}
                      </Link>
                    ))}
                </sub>

              </li>
            )
          })
        }
      </ul>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TAGS_PAGE_QUERY($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
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
