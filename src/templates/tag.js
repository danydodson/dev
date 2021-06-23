import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SetDate from '../utils/set-date'

const TagTemplate = function ({ data }) {
  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <ul className='post-tags-list'>
        {postEdges && postEdges.map(({ node }, i) => {
          return (
            <li key={i}>
              <h2>
                <Link to={`${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <sub className='post-tags-list-subtitle'>
                <SetDate date={node.frontmatter.date} />
                <span>&nbsp;&mdash;&nbsp;</span>
                {node.frontmatter.tags &&
                  node.frontmatter.tags.length > 0 &&
                  node.frontmatter.tags.map((tag, i) => (
                    <Link
                      key={i}
                      to={`/tag/${tag}/`}
                      className='post-tags-list-tag'>
                      #{tag}{' '}
                    </Link>
                  ))}
              </sub>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagQueryPage($tag: String) {
    allMdx(
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            lastmod(formatString: "MM/DD/YYYY")
            excerpt
            category
            tags
          }
        }
      }
    }
  }
`
