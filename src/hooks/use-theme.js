import storage from 'local-storage-fallback'
import { useEffect, useState } from 'react'
import config from '../config'
import { theme as globalTheme } from '../styles/global/theme'

function UseTheme(defaultTheme = { mode: config.defaultTheme }) {

  const [theme, _setTheme] = useState(getInitialTheme)

  // Get theme from local storage
  function getInitialTheme() {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme
  }

  // Store theme in local storage
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  // Save to theme global variable
  globalTheme.curTheme = theme.mode

  return {
    ...theme,
    // eslint-disable-next-line no-unused-vars
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
  }
}

export default UseTheme
