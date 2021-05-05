import React from 'react'
import PropTypes from 'prop-types'
import {
  IconChevronRight,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconMoon,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
} from '@components/icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'ChevronRight':
      return <IconChevronRight />
    case 'Codepen':
      return <IconCodepen />
    case 'External':
      return <IconExternal />
    case 'Folder':
      return <IconFolder />
    case 'Fork':
      return <IconFork />
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Linkedin':
      return <IconLinkedin />
    case 'Loader':
      return <IconLoader />
    case 'Logo':
      return <IconLogo />
    case 'Moon':
      return <IconMoon />
    case 'PlayStore':
      return <IconPlayStore />
    case 'Star':
      return <IconStar />
    case 'Twitter':
      return <IconTwitter />
    case 'Zap':
      return <IconZap />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
