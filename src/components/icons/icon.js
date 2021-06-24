import React from 'react'
import PropTypes from 'prop-types'
import {
  IconArrowDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconCodepen,
  IconExternal,
  IconGitHub,
  IconInfo,
  IconInstagram,
  IconLinkedin,
  IconLogo,
  IconMapMarker,
  IconMoon,
  IconRss,
  IconStop,
  IconSuccess,
  IconSun,
  IconTwitter,
  IconWarning,
} from '../icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'arrowDown':
      return <IconArrowDown />
    case 'chevronLeft':
      return <IconChevronLeft />
    case 'chevronRight':
      return <IconChevronRight />
    case 'iconClock':
      return <IconClock />
    case 'codepen':
      return <IconCodepen />
    case 'external':
      return <IconExternal />
    case 'gitHub':
      return <IconGitHub />
    case 'info':
      return <IconInfo />
    case 'instagram':
      return <IconInstagram />
    case 'linkedin':
      return <IconLinkedin />
    case 'logo':
      return <IconLogo />
    case 'map_marker':
      return <IconMapMarker />
    case 'moon':
      return <IconMoon />
    case 'rss':
      return <IconRss />
    case 'stop':
      return <IconStop />
    case 'success':
      return <IconSuccess />
    case 'sun':
      return <IconSun />
    case 'twitter':
      return <IconTwitter />
    case 'warning':
      return <IconWarning />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
