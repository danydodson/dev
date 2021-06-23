import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconArrowDown } from '../../icons'
import Button from '../../button'
import { setThemeVars } from '../../../utils/set-theme'
import { theme } from '../../../styles/global/theme'

let sizeType = 'rem'

const Collapsable = ({ children, title, titleSize = '1.25rem', defaultShow = false }) => {

  const [show, setShow] = useState(defaultShow)

  if (titleSize.includes('px')) sizeType = 'px'

  const icon = (
    <StyledIconWrapper
      rotate={show.toString()}
      titleSize={((parseFloat(titleSize) * 2) / 3).toString() + sizeType}>
      <IconArrowDown />
    </StyledIconWrapper>
  )

  return (

    <div className='collapsable'>
      {
        title ?
          <StyledCollapsableTitleWrap titleSize={titleSize}>
            <Button onClick={() => setShow(!show)}>
              {icon}
              {title}
            </Button>
          </StyledCollapsableTitleWrap>
          : (<>{icon}</>)
      }
      {
        show &&
        <div style={{ marginLeft: '1.2rem' }}>
          {children}
        </div>
      }
    </div>
  )
}

export default Collapsable

Collapsable.propTypes = {
  title: PropTypes.string.isRequired
}

const StyledCollapsableTitleWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.titleSize};
  margin: 1rem 0;
  button {
    color: ${() => setThemeVars(theme.fontColorLight, theme.fontColorDark)};
  }
`

const StyledIconWrapper = styled.span`
  svg {
    margin-right: 0.3rem;
    transition: transform 250ms;
    width: ${(props) => props.titleSize};
    height: ${(props) => props.titleSize};
    transform: ${(props) => (props.rotate === 'true' ? 'rotate(0deg)' : 'rotate(-90deg)')};
    fill: ${() => setThemeVars(theme.fontColorLight, theme.fontColorDark)};
  }
`
