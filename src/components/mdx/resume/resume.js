import React from 'react'
import styled from 'styled-components'

const Resume = () => {
  return (
    <StyledResumeObject
      className='resume'
      data='https://ik.imagekit.io/vdyy86fmjx/dev/cv_en_5roK0Geit.pdf'
      type='application/pdf'
      width='700px'
      height='700px'
    >
    </StyledResumeObject >
  )
}

export default Resume

const StyledResumeObject = styled.object`
  ${({ theme }) => theme.mixins.reset}; 
  width: 700px;
  height: 700px;
`
