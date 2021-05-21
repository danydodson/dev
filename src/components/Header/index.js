import { faDev, faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import config from '../../config'
import HeaderIcon from '../HeaderIcon'
import ProgressBar from './ProgressBar'

const Header = ({ siteTitle, showTitle, isPostTemplate }) => {

  return (

    <StyledMainHeader className='main-header'>

      {/* Google AdSense */}
      {config.google.adsenseId && config.google.adsenseId !== '' && (
        <script
          async
          data-ad-client={config.google.adsenseId}
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        />
      )}

      {isPostTemplate && config.useScrollIndicator &&
        <ProgressBar />
      }

      <StyledMainHeaderInner className='main-header-inner'>

        <h1 style={{ fontSize: '1.5rem' }}>
          {showTitle &&
            <Link to='/'>{`${siteTitle}`}</Link>
          }
        </h1>

        <StyledMediaIcons>
          <HeaderIcon
            accountInfo={config.socials.devto}
            preHref={'https://dev.to/'}
            mediaName={'dev'}
            icon={faDev}
          />
          <HeaderIcon
            accountInfo={config.socials.github}
            preHref={'https://github.com/'}
            mediaName={'github'}
            icon={faGithub}
          />
          <HeaderIcon
            accountInfo={config.socials.email}
            mediaName={'email'}
            preHref={'mailto:'}
            icon={faEnvelope}
          />
          <HeaderIcon
            accountInfo={config.socials.facebook}
            mediaName={'facebook'}
            preHref={'https://facebook.com/'}
            icon={faFacebook}
          />
          <HeaderIcon
            accountInfo={config.socials.instagram}
            mediaName={'instagram'}
            preHref={'https://instagram.com/'}
            icon={faInstagram}
          />
          <HeaderIcon
            accountInfo={config.socials.twitter}
            mediaName={'twitter'}
            preHref={'https://twitter.com/'}
            icon={faTwitter}
          />
          <HeaderIcon
            accountInfo={config.socials.linkedIn}
            mediaName={'linkedin'}
            preHref={'https://linkedin.com/'}
            icon={faLinkedin}
          />
          <HeaderIcon
            accountInfo={config.socials.medium}
            mediaName={'medium'}
            preHref={'https://medium.com/@'}
            icon={faMedium}
          />
        </StyledMediaIcons>
      </StyledMainHeaderInner>
    </StyledMainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default withTheme(Header)

const StyledMainHeader = styled.header`
  font-family: ${config.fontMain + config.fontsBackUp};
  height: 55px;
  margin-top: ${config.useScrollIndicator ? '-5px' : '0'};
  margin-bottom: 1rem;
`

const StyledMainHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidthSite}px;
  padding: 0.6rem;
  h1 {
    font-weight: 400;
  }
`

const StyledMediaIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  * {
    font-size: 1.7rem;
  }

  @media (max-width: 400px) {
    * {
      margin: 0 0.15rem;
    }
  }
`
