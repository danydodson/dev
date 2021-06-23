import React from 'react'
import { Link } from 'gatsby'
import { IconChevronRight, IconChevronLeft } from '../icons'
import './styles.scss'

const PostEdgeLinks = ({ pageContext }) => {
  const { prev, next } = pageContext
  return (
    prev || next ? (
      <ul className='link-edge-posts'>
        <li>
          {next && (
            <Link to={next.fields.slug} className='link-edge-post'>
              <IconChevronLeft />
              {next.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {prev && (
            <Link to={prev.fields.slug} className='link-edge-post'>
              {prev.frontmatter.title}
              <IconChevronRight />
            </Link>
          )}
        </li>
      </ul>
    ) : null
  )
}

export default PostEdgeLinks
