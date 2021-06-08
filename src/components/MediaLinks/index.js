import React from 'react'
import styled from 'styled-components'
import MediaLink from './MediaLink'
import config from '../../config'

const MediaLinks = () => (
  <StyledMediaLinks>
    <MediaLink
      accountInfo={config.socials.email.address}
      mediaName='Email'
      preHref='mailto:'
    />
    <MediaLink
      accountInfo={config.socials.github.username}
      mediaName='GitHub'
      preHref='https://github.com/'
    />
    <MediaLink
      accountInfo={config.socials.facebook.username}
      mediaName='Facebook'
      preHref='https://www.facebook.com/'
    />
    <MediaLink
      accountInfo={config.socials.instagram.username}
      mediaName='Instagram'
      preHref='https://instagram.com/'
    />
    <MediaLink
      accountInfo={config.socials.twitter.username}
      mediaName='Twitter'
      preHref='https://twitter.com/'
    />
    <MediaLink
      accountInfo={config.socials.linkedIn.username}
      mediaName='LinkedIn'
      preHref='https://linkedin.com/'
    />
    <MediaLink
      accountInfo={config.socials.medium.username}
      mediaName='Medium'
      preHref='https://medium.com/@'
    />
  </StyledMediaLinks>
)

export default MediaLinks

const StyledMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  a {
      color: steelblue;
      margin: 0 0.2rem;
      font-size: 0.9rem;
      /* font-size: 0.8rem; */
  }
`
