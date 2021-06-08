import { css } from 'styled-components'

import IBMPlexSansRegularWoff from '../fonts/IBMPlexSans/IBMPlexSans-Regular.woff'
import IBMPlexSansRegularWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-Regular.woff2'
import IBMPlexSansMediumWoff from '../fonts/IBMPlexSans/IBMPlexSans-Medium.woff'
import IBMPlexSansMediumWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-Medium.woff2'
import IBMPlexSansSemiboldWoff from '../fonts/IBMPlexSans/IBMPlexSans-Semibold.woff'
import IBMPlexSansSemiboldWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-Semibold.woff2'

import IBMPlexSansRegularItalicWoff from '../fonts/IBMPlexSans/IBMPlexSans-RegularItalic.woff'
import IBMPlexSansRegularItalicWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-RegularItalic.woff2'
import IBMPlexSansMediumItalicWoff from '../fonts/IBMPlexSans/IBMPlexSans-MediumItalic.woff'
import IBMPlexSansMediumItalicWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-MediumItalic.woff2'
import IBMPlexSansSemiboldItalicWoff from '../fonts/IBMPlexSans/IBMPlexSans-SemiboldItalic.woff'
import IBMPlexSansSemiboldItalicWoff2 from '../fonts/IBMPlexSans/IBMPlexSans-SemiboldItalic.woff2'

import OxaniumRegularWoff from '../fonts/Oxanium/Oxanium-Regular.woff'
import OxaniumRegularWoff2 from '../fonts/Oxanium/Oxanium-Regular.woff2'
import OxaniumSemiboldWoff from '../fonts/Oxanium/Oxanium-Semibold.woff'
import OxaniumSemiboldWoff2 from '../fonts/Oxanium/Oxanium-Semibold.woff2'

import OxaniumRegularItalicWoff from '../fonts/Oxanium/Oxanium-RegularItalic.woff'
import OxaniumRegularItalicWoff2 from '../fonts/Oxanium/Oxanium-RegularItalic.woff2'
import OxaniumSemiboldItalicWoff from '../fonts/Oxanium/Oxanium-SemiboldItalic.woff'
import OxaniumSemiboldItalicWoff2 from '../fonts/Oxanium/Oxanium-SemiboldItalic.woff2'

const ibmPlexSansNormalWeights = {
  400: [IBMPlexSansRegularWoff, IBMPlexSansRegularWoff2],
  500: [IBMPlexSansMediumWoff, IBMPlexSansMediumWoff2],
  600: [IBMPlexSansSemiboldWoff, IBMPlexSansSemiboldWoff2],
}

const ibmPlexSansItalicWeights = {
  400: [IBMPlexSansRegularItalicWoff, IBMPlexSansRegularItalicWoff2],
  500: [IBMPlexSansMediumItalicWoff, IBMPlexSansMediumItalicWoff2],
  600: [IBMPlexSansSemiboldItalicWoff, IBMPlexSansSemiboldItalicWoff2],
}

const oxaniumNormalWeights = {
  400: [OxaniumRegularWoff, OxaniumRegularWoff2],
  600: [OxaniumSemiboldWoff, OxaniumSemiboldWoff2],
}

const oxaniumItalicWeights = {
  400: [OxaniumRegularItalicWoff, OxaniumRegularItalicWoff2],
  600: [OxaniumSemiboldItalicWoff, OxaniumSemiboldItalicWoff2],
}

const ibmPlexSans = {
  name: 'IBMPlexSans',
  normal: ibmPlexSansNormalWeights,
  italic: ibmPlexSansItalicWeights,
}

const oxanium = {
  name: 'SF Mono',
  normal: oxaniumNormalWeights,
  italic: oxaniumItalicWeights,
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
const oxaniumItalic = createFontFaces(oxanium, 'italic')

const Fonts = css`
  ${ibmPlexSansNormal + ibmPlexSansItalic + oxaniumNormal + oxaniumItalic}
`

export default Fonts

