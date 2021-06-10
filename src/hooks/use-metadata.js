import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {

  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            author
            enableAbout
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata