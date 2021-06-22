import React from 'react'
import { IconMapMarker } from '../../icons'
import config from '../../../config'
import styled from 'styled-components'

const ProfileLocation = () => {

  return (
    config.location ? (
      <StyledTextsLocation className='profile-texts-location'>
        <a className='location-flex'
          href={`https://www.google.com/maps/search/${config.location}`}
          target='_blank'
          rel='noopener noreferrer'>
          <IconMapMarker />
          {config.location}
        </a>
      </StyledTextsLocation>
    ) : null
  )
}

export default ProfileLocation

const StyledTextsLocation = styled.p`
  font-size: 0.85rem;
  margin: 0.3rem 0.3rem 0.3rem 0 !important;
  .location-flex {
    display: flex;
    align-items: center;
  }
`
