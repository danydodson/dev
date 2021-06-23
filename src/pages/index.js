import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import MainCard from '../components/main-card'
import config from '../config'

const loadsPer = config.loadsPer

const IndexPage = ({ data }) => {

  const [loaded, setLoaded] = useState(undefined)
  const posts = data.allMdx.edges

  useEffect(() => {
    const curLoad = sessionStorage.getItem('curLoad') || loadsPer
    setLoaded(parseInt(curLoad))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    const lastPostLoaded = document.querySelector('div.posts-list > a:last-child')
    const lastPostLoadedOffset = lastPostLoaded.offsetTop + lastPostLoaded.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight

    if (pageOffset > lastPostLoadedOffset) {
      // Stops loading
      if (posts.length > loaded)
        setLoaded(prev => {
          sessionStorage.setItem('curLoad', prev + loadsPer)
          return prev + loadsPer
        })
    }
  }

  return (
    <Layout>
      <Seo title='Home' />
      <MainCard posts={posts} loads={loaded} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx(
      filter: { frontmatter: { draft: { ne: true } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            excerpt
            cover {
              childrenImageSharp {
                gatsbyImageData(aspectRatio: 1.3)
              }
            }
            category
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
