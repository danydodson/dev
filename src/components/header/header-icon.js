import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderIcon = ({ accountInfo, mediaName, preHref, icon }) => {

  const accountName = accountInfo.username
    ? accountInfo.username
    : accountInfo.email

  return (
    <>
      {accountName && accountInfo.showHeaderIcon && (
        <a className='icon-fa-link'
          href={`${preHref}${accountName}`}
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon
            className={`icon-${mediaName} icon-fa`}
            icon={icon} />
        </a>
      )}
    </>
  )
}

HeaderIcon.propTypes = {
  accountInfo: PropTypes.object.isRequired,
  mediaName: PropTypes.string,
  preHref: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}

export default HeaderIcon
