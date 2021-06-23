import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SetDate from '../utils/set-date'

const CategoriesTemplate = function ({ data }) {
  // console.log(data.allMdx.edges[0])

  const postEdges = data.allMdx.edges
  const fields = data.allMdx.edges[0].node.fields
  // const frontmatter = data.allMdx.edges[0].node.frontmatter

  return (
    <Layout showTitle>
      <ul className='post-categories-list'>
        {postEdges &&
          postEdges.map(({ node }) => {
            const { title, date, categories } = node.frontmatter
            return (
              <li key={date}>
                <h2>
                  <Link to={`${fields.slug}`}>{title}</Link>
                </h2>
                <sub className='post-categories-list-subtitle'>
                  <SetDate date={date} />
                  <span>&nbsp;&mdash;&nbsp;</span>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category, i) => (
                      <Link key={i}
                        to={`/categories/${category}/`}
                        className='post-categories-list-category'>
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
  query CategoryQueryPage($category: String) {
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
