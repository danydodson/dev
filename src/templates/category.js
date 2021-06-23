import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SetDate from '../utils/set-date'

const CategoryTemplate = function ({ data }) {
  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <ul className='post-categories-list'>
        {postEdges && postEdges.map(({ node }, i) => {
          return (
            <li key={i}>
              <h2>
                <Link to={`${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <sub className='post-categories-list-subtitle'>
                <SetDate date={node.frontmatter.date} />
                <span>&nbsp;&mdash;&nbsp;</span>
                {node.frontmatter.categories &&
                  node.frontmatter.categories.length > 0 &&
                  node.frontmatter.categories.map((category, i) => (
                    <Link key={i}
                      to={`/categories/${category}/`}
                      className='post-categories-list-category'>
                      #{category}{' '}
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

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryQueryPage($category: String) {
    allMdx(
      filter: {frontmatter: {category: {in: [$category]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            categorySlug
            slug
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
