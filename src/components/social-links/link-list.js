import React from 'react'
import styled from 'styled-components'
import SocialLink from './link-button'
import config from '../../config'

const SocialLinks = () => (
  <StyledSocialLinks>
    <SocialLink
      accountInfo={config.socials.email.address}
      mediaName='Email'
      preHref='mailto:' />
    <SocialLink
      accountInfo={config.socials.github.username}
      mediaName='GitHub'
      preHref='https://github.com/' />
    <SocialLink
      accountInfo={config.socials.facebook.username}
      mediaName='Facebook'
      preHref='https://www.facebook.com/' />
    <SocialLink
      accountInfo={config.socials.instagram.username}
      mediaName='Instagram'
      preHref='https://instagram.com/' />
    <SocialLink
      accountInfo={config.socials.twitter.username}
      mediaName='Twitter'
      preHref='https://twitter.com/' />
    <SocialLink
      accountInfo={config.socials.linkedIn.username}
      mediaName='LinkedIn'
      preHref='https://linkedin.com/' />
    <SocialLink
      accountInfo={config.socials.medium.username}
      mediaName='Medium'
      preHref='https://medium.com/@' />
  </StyledSocialLinks>
)

export default SocialLinks

const StyledSocialLinks = styled.div`
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
