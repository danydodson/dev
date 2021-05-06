import React from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { siteConfig as conf } from '../../../../src/config'
import styled from 'styled-components'

const ProfileLocation = () => {

  return conf.location ? (
    <StyledTextsLocation className='profile-texts-location'>
      <a href={`https://www.google.com/maps/search/${conf.location}`} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon className='icon-fa icon-location' icon={faMapMarkerAlt} />
        {conf.location}
      </a>
    </StyledTextsLocation>
  ) : null
}

export default ProfileLocation

const StyledTextsLocation = styled.p`
    font-size: 0.85rem;
    margin: 0.3rem !important;
    .icon-location {
        font-size: 0.8rem;
    }
`
