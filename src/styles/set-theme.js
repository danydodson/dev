import { theme } from '../components/Shared/styles-global'

export const setThemeVars = (lightVar, darkVar) => {
  return theme.curTheme === 'light' ? lightVar : darkVar
}
