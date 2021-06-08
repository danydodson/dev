// import { css } from 'styled-components'

// import OxaniumRegularWoff from './Oxanium-Regular.woff'
// import OxaniumRegularWoff2 from './Oxanium-Regular.woff2'
// import OxaniumMediumWoff from './Oxanium-Medium.woff'
// import OxaniumMediumWoff2 from './Oxanium-Medium.woff2'
// import OxaniumSemiboldWoff from './Oxanium-Semibold.woff'
// import OxaniumSemiboldWoff2 from './Oxanium-Semibold.woff2'

// import OxaniumRegularItalicWoff from '.Oxanium-RegularItalic.woff'
// import OxaniumRegularItalicWoff2 from '.Oxanium-RegularItalic.woff2'
// import OxaniumMediumItalicWoff from '.Oxanium-MediumItalic.woff'
// import OxaniumMediumItalicWoff2 from '.Oxanium-MediumItalic.woff2'
// import OxaniumSemiboldItalicWoff from '.Oxanium-SemiboldItalic.woff'
// import OxaniumSemiboldItalicWoff2 from '.Oxanium-SemiboldItalic.woff2'

// const oxaniumNormalWeights = {
//   400: [OxaniumRegularWoff, OxaniumRegularWoff2],
//   500: [OxaniumMediumWoff, OxaniumMediumWoff2],
//   600: [OxaniumSemiboldWoff, OxaniumSemiboldWoff2],
// }

// const oxaniumItalicWeights = {
//   400: [OxaniumRegularItalicWoff, OxaniumRegularItalicWoff2],
//   500: [OxaniumMediumItalicWoff, OxaniumMediumItalicWoff2],
//   600: [OxaniumSemiboldItalicWoff, OxaniumSemiboldItalicWoff2],
// }

// const oxanium = {
//   name: 'Oxanium',
//   normal: oxaniumNormalWeights,
//   italic: oxaniumItalicWeights,
// }

// const createFontFaces = (family, style = 'normal') => {
//   let styles = ''

//   for (const [weight, formats] of Object.entries(family[style])) {
//     const woff = formats[0]
//     const woff2 = formats[1]

//     styles += `
//       @font-face {
//         font-family: '${family.name}';
//         src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
//         font-weight: ${weight};
//         font-style: ${style};
//         font-display: auto;
//       }
//     `
//   }

//   return styles
// }

// const oxaniumNormal = createFontFaces(oxanium)
// const oxaniumItalic = createFontFaces(oxanium, 'italic')


// const OxaniumFonts = css`
//   ${oxaniumNormal + oxaniumItalic}
// `

// export default OxaniumFonts
