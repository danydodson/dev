import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SetDate from '../utils/set-date'

const CategoriesTemplate = function({ data }) {

  const postEdges = data.allMdx.edges

  return (
    <Layout showTitle>
      <ul className='post-categories-list'>

        {postEdges &&
          postEdges.map(({ node }) => {
            const { title, date, slug, categories } = node.frontmatter
            return (
              <li key={slug}>

                <h2>
                  <Link to={`/posts/${slug}`}>{title}</Link>
                </h2>

                <sub className='post-categories-list-subtitle'>
                  
                  <SetDate date={date} />

                  <span>&nbsp;&mdash;&nbsp;</span>

                  {categories &&
                    categories.length > 0 &&
                    categories.map((category, i) => (
                      <Link
                        key={i}
                        to={`/categories/${category}/`}
                        className='post-categories-list-category'
                      >
                        #{category}{' '}
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

export default CategoriesTemplate

export const pageQuery = graphql`
  query CategoriesQueryPage($category: String) {
    allMdx(
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            slug
            category
          }
        }
      }
    }
  }
`
