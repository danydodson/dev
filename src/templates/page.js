import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import Page from '../components/Page'
// import { useSiteMetadata } from '../hooks/use-metadata'

const PageTemplate = ({ data }) => {
  // const { title: siteTitle } = useSiteMetadata()
  // const { frontmatter } = data.markdownRemark
  // const { title: pageTitle, description: pageDescription = '', socialImage } = frontmatter
  // const metaDescription = pageDescription || siteSubtitle
  // const socialImageUrl = socialImage?.publicURL
  {/* <Page page={data.markdownRemark} /> */ }

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      excerpt
      timeToRead
      fields {
        slug
        categorySlug
        tagSlugs
      }
      frontmatter {
        slug
        title
        date
        template
        tags
        excerpt
        draft
        date
        category
        cover {
          name
          childImageSharp {
            gatsbyImageData
          }
          childrenImageSharp {
            gatsbyImageData
          }
          relativePath
          relativeDirectory
        }
      }
    }
  }
`

export default PageTemplate

// const StyledListingCoverImage = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 55px;
//   margin: 0 auto;
//   max-width: ${props => props.theme.maxWidthSite}px;
//   padding: 0.6rem;
//   h1 {
//     font-weight: 400;
//   }
// `

// const StyledHTML = styled.div`
//   word-wrap: break-word;
//   padding: 1rem;
//   font-family: ${config.fontMain + config.fontsBackUp};
//   margin-top: 1rem;
//   font-size: 105%;
//   h1 {
//     margin-top: 2.5rem;
//   }

//   .page-title {
//     margin-top: 0;
//     margin-bottom: 1rem;
//   }

//   h2 {
//     margin-top: 2rem;
//   }

//   h3 {
//     margin-top: 1.3rem;
//   }

//   h4 {
//     margin-top: 1rem;
//   }

//   h5 {
//     margin-top: 0.8rem;
//   }

//   h6 {
//     margin-top: 0.6rem;
//   }

//   p {
//     margin-top: 0.9rem;
//     line-height: 1.4;
//   }

//   blockquote {
//     padding: 0.3rem 1rem;
//     margin: 0.5rem 0;
//     > p {
//       margin-top: 0.5rem; 
//     }
//     > blockquote {
//       border-left: none;
//       font-size: 1.2rem;
//       > blockquote {
//         font-size: 1.3rem;
//       }
//     }
//   }

//   a {
//     color: steelblue;
//   }

//   ul {
//     list-style: none;
//     margin: 1rem 0.3rem;
//     li {
//       display: flex;
//       justify-content: flex-start;
//       margin: 0.5rem 0;
//       /* Custom list for ul */
//       .icon-wrap {
//         svg.icon-chevron-right {
//           display: inline-block;
//           width: 0.75rem;
//           height: 0.75rem;
//           margin-right: 0.5rem;
//           fill: ${() => setThemeVars(config.fontColorLight, config.fontColorDark)};
//         }
//       }
//       span.ul-children {
//         width: 100%;
//         & > p:first-child {
//           display: inline;
//         }
//       }
//     }
//   }

//   ol {
//     margin: 0.5rem 1.2rem;
//     li {
//       margin: 1rem 0;
//       margin-left: 0.3rem;
//       span {
//         margin-left: 0.15rem;
//       }
//     }
//   }

//   pre {
//     font-family: inherit;
//   }

//   img {
//     margin: 0.35rem 0;
//   }

//   .gatsby-resp-image-wrapper {
//     margin: 0.5rem 0;
//   }

//   @media (max-width: 500px) {
//     padding: 0.5rem 1rem;

//     .page-title {
//       font-size: 2rem;
//     }

//     ul,
//     ol {
//       margin-right: 1rem;
//     }
//   }
// `
