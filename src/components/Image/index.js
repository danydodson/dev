import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import siteConfig from "../../../data/site-config"

const Image = (props) => {

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

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(siteConfig.profileImageName)
  })

  if (!image) {
    return null
  }

  console.log(image.node.childImageSharp.gatsbyImageData)

  return (
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      className="img-profile"
      {...props}
    />
  )
}

export default Image
