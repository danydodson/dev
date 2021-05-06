import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { siteConfig } from '../../../src/config'

const AboutLink = () => (
  <>
    {siteConfig.enableAbout ? (
      <StyledMainCardName className='main-card-name'>
        <h2>
          <Link to='/about'>{siteConfig.author}</Link>
        </h2>
      </StyledMainCardName>
    ) : (
      <StyledMainCardNameAboutDisabled>
        <h2>{siteConfig,author}</h2>
      </StyledMainCardNameAboutDisabled>
    )}
  </>
)

export default AboutLink

const StyledMainCardName = styled.div`
    display: inline-block;
    cursor: pointer;
    h2 {
        padding: 0.2rem 0.4rem;
    }
`

const StyledMainCardNameAboutDisabled = styled.div`
    display: inline-block;
    h2 {
        padding: 0.2rem 0rem;
    }
`
