import * as React from 'react'
// import styled from 'styled-components'

function IconClock(props) {
  return (
    <svg 
      version='1.1'
      role='img'
      fill='currentColor'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      height='1em'
      className='icon-fa icon-clock'
      {...props}
    >
      <path d="M 256 8 C 119 8 8 119 8 256 S 119 504 256 504 S 504 393 504 256 S 393 8 256 8 Z m 92.49 313 h 0 l -20 25 a 16 16 0 0 1 -22.49 2.5 h 0 l -67 -49.72 a 40 40 0 0 1 -15 -31.23 V 112 a 16 16 0 0 1 16 -16 h 32 a 16 16 0 0 1 16 16 V 256 l 58 42.5 A 16 16 0 0 1 348.49 321 Z" />
    </svg>
  )
}

export default IconClock

// const StyledIcon = styled.svg`
//   width: 0.8rem;
//   height: 0.8rem;
//   color: #808080;
// `