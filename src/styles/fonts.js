import { css } from 'styled-components'

import IBMPlexSansRegularWoff from '~fonts/IBMPlexSans/IBMPlexSans-Regular.woff'
import IBMPlexSansRegularWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-Regular.woff2'
import IBMPlexSansMediumWoff from '~fonts/IBMPlexSans/IBMPlexSans-Medium.woff'
import IBMPlexSansMediumWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-Medium.woff2'
import IBMPlexSansSemiBoldWoff from '~fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff'
import IBMPlexSansSemiBoldWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff2'

import IBMPlexSansRegularItalicWoff from '~fonts/IBMPlexSans/IBMPlexSans-Italic.woff'
import IBMPlexSansRegularItalicWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-Italic.woff2'
import IBMPlexSansMediumItalicWoff from '~fonts/IBMPlexSans/IBMPlexSans-MediumItalic.woff'
import IBMPlexSansMediumItalicWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-MediumItalic.woff2'
import IBMPlexSansSemiBoldItalicWoff from '~fonts/IBMPlexSans/IBMPlexSans-SemiBoldItalic.woff'
import IBMPlexSansSemiBoldItalicWoff2 from '~fonts/IBMPlexSans/IBMPlexSans-SemiBoldItalic.woff2'

import OxaniumRegularWoff from '~fonts/Oxanium/Oxanium-Regular.woff'
import OxaniumRegularWoff2 from '~fonts/Oxanium/Oxanium-Regular.woff2'
import OxaniumSemiboldWoff from '~fonts/Oxanium/Oxanium-SemiBold.woff'
import OxaniumSemiboldWoff2 from '~fonts/Oxanium/Oxanium-SemiBold.woff2'

const ibmPlexSansNormalWeights = {
  400: [IBMPlexSansRegularWoff, IBMPlexSansRegularWoff2],
  500: [IBMPlexSansMediumWoff, IBMPlexSansMediumWoff2],
  600: [IBMPlexSansSemiBoldWoff, IBMPlexSansSemiBoldWoff2],
}

const ibmPlexSansItalicWeights = {
  400: [IBMPlexSansRegularItalicWoff, IBMPlexSansRegularItalicWoff2],
  500: [IBMPlexSansMediumItalicWoff, IBMPlexSansMediumItalicWoff2],
  600: [IBMPlexSansSemiBoldItalicWoff, IBMPlexSansSemiBoldItalicWoff2],
}

const oxaniumNormalWeights = {
  400: [OxaniumRegularWoff, OxaniumRegularWoff2],
  600: [OxaniumSemiboldWoff, OxaniumSemiboldWoff2],
}

const ibmPlexSans = {
  name: 'IBMPlexSans',
  normal: ibmPlexSansNormalWeights,
  italic: ibmPlexSansItalicWeights,
}

const oxanium = {
  name: 'Oxanium',
  normal: oxaniumNormalWeights,
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'), 
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const ibmPlexSansNormal = createFontFaces(ibmPlexSans)
const ibmPlexSansItalic = createFontFaces(ibmPlexSans, 'italic')

const oxaniumNormal = createFontFaces(oxanium)

const Fonts = css`
  ${ibmPlexSansNormal + ibmPlexSansItalic + oxaniumNormal}
`

export default Fonts

