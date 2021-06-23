import React from 'react'

const SocialLink = ({ accountInfo, mediaName, preHref }) => {
  return (
    accountInfo && accountInfo !== '' && (
      <a href={`${preHref}${accountInfo}`}
        target='_blank'
        rel='noopener noreferrer' >
        {mediaName}
      </a>
    )
  )
}

export default SocialLink
