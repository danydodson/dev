import React from 'react'
import styled from 'styled-components'
import config from '../../config'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  LinkedinShareButton,
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share'

const ShareButtons = ({ location }) => {

  return (
    <StyledShareButtonsWrap className='share-buttons-wrap'>
      {config.shareButtons.email && (
        <EmailShareButton url={location}>
          <EmailIcon round size={32} />
        </EmailShareButton>
      )}
      {config.shareButtons.facebook && (
        <FacebookShareButton url={location}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
      )}
      {config.shareButtons.twitter && (
        <TwitterShareButton url={location}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      )}
      {config.shareButtons.reddit && (
        <RedditShareButton url={location}>
          <RedditIcon round size={32} />
        </RedditShareButton>
      )}
      {config.shareButtons.linkedIn && (
        <LinkedinShareButton url={location}>
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>
      )}
    </StyledShareButtonsWrap>
  )
}

export default ShareButtons

const StyledShareButtonsWrap = styled.div`
  ${({ theme }) => theme.mixins.shareButtonsWrap};
`