import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IconArrowDown } from '../icons'

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible && (
    <StyledButton className='btn-scroll-top' onClick={scrollToTop}>
      <IconArrowDown />
    </StyledButton>
  )

}

export default ScrollTopButton

const StyledButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 55px;
  right: 30px;
  z-index: 3;
  padding: 0.3rem 0.2rem 0 0.2rem;
  background: #7d7b92;
  opacity: 0.3;
  color: #fff;
  border: none;
  border-radius: 5px;
  transform: rotate(180deg);
  transition: opacity 300ms linear;
  &:hover {
    opacity: 1;
  }
`
