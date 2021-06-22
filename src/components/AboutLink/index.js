import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../../hooks/use-metadata'

const AboutLink = () => {

  const { author, enableAbout } = useSiteMetadata()

  return (
    enableAbout ? (
      <StyledMainCardName className='main-card-name'>
        <h2>
          <Link to='/profile/hello'>{author}</Link>
        </h2>
      </StyledMainCardName>
    ) : (
      <StyledMainCardNameAboutDisabled>
        <h2>{author}</h2>
      </StyledMainCardNameAboutDisabled>
    )
  )
}

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
