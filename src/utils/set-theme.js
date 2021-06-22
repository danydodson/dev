import { theme } from '../styles/global/theme'

export const setThemeVars = (lightVar, darkVar) => {
  return (
    theme.curTheme === 'light'
      ? lightVar
      : darkVar
  )
}
