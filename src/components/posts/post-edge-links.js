import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { IconChevronRight, IconChevronLeft } from '../icons'
import { setThemeVars } from '../../utils/set-theme'

const PostEdgeLinks = ({ pageContext }) => {
  const { prev, next } = pageContext
  
  return (
    prev || next ? (
      <StyledPostEdgeLinks>
        <StyledPostEdgeLink>
          {prev && (
            <Link to={prev.fields.slug} className='link-edge-post'>
              <IconChevronLeft />
              {prev.frontmatter.title}
            </Link>
          )}
        </StyledPostEdgeLink>
        <StyledPostEdgeLink>
          {next && (
            <Link to={next.fields.slug} className='link-edge-post'>
              {next.frontmatter.title}
              <IconChevronRight />
            </Link>
          )}
        </StyledPostEdgeLink>
      </StyledPostEdgeLinks>
    ) : null
  )
}

export default PostEdgeLinks

const StyledPostEdgeLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0.3rem;
`

const StyledPostEdgeLink = styled.li`
  .link-edge-post {
    display: flex;
    align-items: center;
    padding: 1rem;
    max-width: 300px;
    font-size: 0.8rem;
    border-radius: 8px;
    background: ${() => setThemeVars('#fafafa', '#2f2d33')};
    .icon-chevron {
      margin: 0 0.5rem;
    }
    &:hover {
      background: ${() => setThemeVars('#ededef', '#333138')};
    }
    @media (max-width: 500px) {
      max-width: 150px !important;
      padding: 1rem !important;
    }
  }
`