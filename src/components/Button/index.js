import React from 'react'
import styled from 'styled-components'

const Button = ({ children, className, ...otherProps }) => {
  return (
    <StyledButton
      className={`${className || ''} btn_custom`}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.btnCustom};
`