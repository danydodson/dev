import React from 'react'
import { ThemeConsumer } from 'styled-components'
import CustomSwitch from '../theme-switch'

const ToggleMode = () => {

  return (
    <ThemeConsumer>
      {theme => {
        return (<CustomSwitch onClick={() => theme.setTheme(theme.mode === 'dark'
          ? { mode: 'light' }
          : { mode: 'dark' })}
        />
        )
      }}
    </ThemeConsumer>
  )
}

export default ToggleMode
