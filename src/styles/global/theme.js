import mixins from './mixins'
import config from '../../config'

const globalVar = {

  primaryColor: '#fff',
  secondaryColor: '#333',

  bgColorLight: config.bgColorLight,
  bgColorDark: config.bgColorDark,
  bgSubColorLight: config.bgSubColorLight,
  bgSubColorDark: config.bgSubColorDark,

  headerColorLight: config.headerColorLight,
  headerColorDark: config.headerColorDark,

  fontColorLight: config.fontColorLight,
  fontSubColorLight: config.fontSubColorLight,
  fontColorDark: config.fontColorDark,
  fontSubColorDark: config.fontSubColorDark,

  darkColor: '#333',
  midColor: '#444',
  darkerColor: '#2c2c39',
  subColor: 'grey',
  lightGreyColor: '#eee',
  midGreyColor: '#ccc',
  mintColor: '#bfe2ca',

  maxWidthSite: `${config.maxWidth}px`,

  mixins,
}

// global variables are passed down to themes to be used in other styled components
export const theme = { ...globalVar }
