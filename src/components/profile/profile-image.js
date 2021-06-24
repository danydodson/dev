import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { theme } from '../../styles/global/theme'
import styled from 'styled-components'

const ProfileImage = ({ home }) => {

  return (
    home ? (
      <StyledImageHome className='profile-image-home'>
        <StyledInner className='profile-image-inner'>
          <StyledInnerInner className='profile-image-inner-inner' />
        </StyledInner>
        <StyledImage>
          <StaticImage
            src='../../assets/og@1x.png'
            alt='dany dodson'
            placeholder='blurred' />
        </StyledImage>
      </StyledImageHome>
    ) : (
      <StyledImage>
        <StaticImage
          src='../../assets/og@1x.png'
          alt='dany dodson'
          placeholder='blurred' />
      </StyledImage>
    )
  )
}

export default ProfileImage

const profileImageSize = '80px'

const StyledImage = styled.div`
    position: relative;
    width: ${profileImageSize};
    height: ${profileImageSize};

    .gatsby-image-wrapper {
      /* border: 1px #ccc solid; */
      border-radius: 50%;
    }
`

const StyledImageHome = styled.div`
    position: absolute;
    top: -22%;
    left: 50%;
    transform: translateX(-50%);
    width: ${profileImageSize};
    height: ${profileImageSize};

    .gatsby-image-wrapper {
      /* border: 1px #ccc solid; */
      border-radius: 50%;
    }
`

// Draw line around image
const StyledInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 94px;
    height: 94px;
    border: 1px solid ${theme.mintColor};
`
// Hide some of ^ line with rectangle
const StyledInnerInner = styled.div`
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 30px;
    border-radius: 0 !important;
`
