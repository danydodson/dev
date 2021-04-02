// import { useStaticQuery, graphql } from 'gatsby'

// const UseCategoriesList = () => {

//   const { allMarkdownRemark } = useStaticQuery(
//     graphql`
//       query CategoriesListQuery {
//         allMarkdownRemark(
//           filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
//         ) {
//           group(field: frontmatter___category) {
//             fieldValue
//             totalCount
//           }
//         }
//       }
//     `
//   )

//   return allMarkdownRemark.group
// }

// export default UseCategoriesList
