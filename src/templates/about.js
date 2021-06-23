import React from 'react'
// import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import Ruler from '../components/ruler'
// import Profile from '../components/profile'
// import Seo from '../components/seo'
// import ToggleMode from '../components/layout/toggle-mode'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { theme } from '../styles/global/theme'




const AboutTemplate = ({ data }) => {


  // const frontmatter = data.mdx.frontmatter
  // const cover = getImage(frontmatter.cover)
  // const isAboutPage = post.frontmatter.slug.includes('/about')
  console.log(data)

  return (
    <Layout showTitle={true} isPostTemplate>
      {/* <Seo title={frontmatter.title} description={post.excerpt} /> */}
    </Layout>
  )
}

export const query = graphql`
  query AboutSlug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        title
      }
    }
  }
`

export default AboutTemplate

