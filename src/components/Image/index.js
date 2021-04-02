import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import siteConfig from '../../../data/site-config'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(height: 300)
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((n) => n.node.relativePath.includes(siteConfig.profileImageName))

  if (!image) {
    return null
  }

  return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} className='img-profile' alt='profile-picture' />
}

export default Image
