import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'
import { withTheme } from 'styled-components'
import { IconMoon, IconSun } from '../icons'

// TODO make button float

const CustomSwitch = (props) => {
  const [checked, setChecked] = useState(false)
  // const [currentTheme, setCurrentTheme] = useState('')

  const changeTheme = (nextChecked) => {
    setChecked(nextChecked)
    props.onClick()
  }

  useEffect(() => {
    if (props.theme.mode !== 'dark') {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }, [props.theme.mode])

  return (
    <Switch
      onChange={changeTheme}
      checked={checked}
      offColor='#bbb'
      onColor='#4a4a4a'
      className='react-switch'
      uncheckedIcon={<IconMoon />}
      checkedIcon={<IconSun />}
      handleDiameter={21}
      height={23}
      width={40}
      onHandleColor='#333'
    />
  )
}

export default withTheme(CustomSwitch)
