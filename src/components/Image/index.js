import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import siteConfig from '../../../data/site-config'

const Image = ({ src, ...props }) => {
    
  const data = useStaticQuery(graphql`
        query {
            allFile(filter: { internal: { mediaType: { regex: "/" } } }) {
                edges {
                    node {
                        relativePath
                        name
                        ext
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `)

  const match = useMemo(() => data.allFile.edges.find(({ node }) => src === node.relativePath), [data, src])

  const image = match.node.childImageSharp.gatsbyImageData

  if (!image) {
    return null
  }

  return <GatsbyImage image={image} className='img-profile' {...props} />
}

export default Image
