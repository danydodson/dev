import React from 'react'
import PropTypes from 'prop-types'

import {
  IconMoon,
  IconSun,
  IconExternal,
} from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Moon':
      return <IconMoon />
    case 'Sun':
      return <IconSun />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
