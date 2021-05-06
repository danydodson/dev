import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { siteConfig, styleConfig } from '~config'
import { UtterancesComments } from '~components/Comments'
import Layout from '~components/Layout'
import ToggleMode from '~components/Layout/ToggleMode'
import LinkEdgePosts from '~components/LinkEdgePosts'
import { Collapsable, Danger, Info, Primary, Resume, Success, Underline, Warning } from '~components/MdxComponents'
import Profile from '~components/Profile'
import Ruler from '~components/Ruler'
import SEO from '~components/SEO'
import ShareButtons from '~components/ShareButtons'
import { theme } from '~components/Shared/styles-global'
import ChevronRight from '~media/svgs/chevron-right.svg'
import { setThemeVars } from '~utils/theme-helper'

const PostTemplate = function ({ pageContext, data }) {

  const [location, setLocation] = useState(init => init)

  const post = data.mdx
  const isAboutPage = post.fields.slug.includes('/about/')
  const isInfoPage = post.fields.slug.includes('/resume/')
  const category = pageContext.category
  const utterancesRef = useRef()

  useEffect(() => {
    const handleChange = init => {
      setLocation(init)
    }
    if (isMobile) {
      moveAnchorHeadings()
    }
    if (siteConfig.comments.utterances.enabled && siteConfig.comments.utterances.repoUrl) {
      registerComments(siteConfig.comments.utterances.repoUrl)
    }
    window.addEventListener('popstate', handleChange(window.location.href))

    return () => {
      window.removeEventListener('popstate', handleChange(window.location.href))
    }
  }, [])

  const registerComments = () => {
    if (utterancesRef.current) {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.crossOrigin = 'anonymous'
      script.setAttribute('repo', 'danydodson/dev')
      script.setAttribute('issue-term', 'pathname')
      script.setAttribute('label', 'blog-comment')
      script.setAttribute('theme', `${theme.curTheme === 'dark' ? 'github-dark' : 'github-light'}`)
      utterancesRef.current.appendChild(script)
    }
  }

  const moveAnchorHeadings = () => {
    const target = '.anchor-heading'
    const anchors = Array.from(document.querySelectorAll(target))
    anchors.forEach(anchor => {
      anchor.parentNode.appendChild(anchor)
      anchor.classList.add('after')
      anchor.classList.remove('before')
    })
  }

  const mdxComponents = {
    'ul.li': ({ children }) => {
      return (
        <li>
          <span className='icon-wrap'>
            <ChevronRight className='icon-chevron-right' />
          </span>
          <span className='ul-children'>{children}</span>
        </li>
      )
    },
    'ol.li': ({ children }) => {
      return (
        <li>
          <span>{children}</span>
        </li>
      )
    },
    hr: () => <Ruler widthInPercent='100' verticalMargin='0.8rem' />,
    Info,
    Primary,
    Danger,
    Warning,
    Success,
    Resume,
    Collapsable,
    Underline
  }

  return (
    <Layout showTitle isPostTemplate>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className='switch-container' style={{ textAlign: 'end', margin: '0 1.1rem' }}>
        <ToggleMode />
      </div>
      <StyledHTML className='post-html'>
        {!isAboutPage && !isInfoPage && (
          <>
            <h1 className='post-title'>{post.frontmatter.title}</h1>
            {/* Show post cover image */}
            <GatsbyImage
              image={post.frontmatter.cover.childImageSharp.gatsbyImageData}
              alt='postImage'
              objectFit='cover'
              objectPosition='100% 100%'
            />
            {/* Show tag & date */}
            <div className='post-data' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }} >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {post.frontmatter.tags &&
                    post.frontmatter.tags.map((tag, i) => (
                      <p key={i} style={{ margin: '0.3rem 0.3rem', padding: '0.15rem 0.4rem', border: '1px solid #aaa', borderRadius: '5px', fontSize: '0.8rem' }}>
                        {tag}
                      </p>
                    ))}
                </div>
              </div>
              <p style={{ fontStyle: 'italic', margin: '0', marginBottom: '0.3rem' }} >
                {post.frontmatter.date}
              </p>
            </div>
            <Ruler />
          </>
        )}
        {/* Render mdx */}
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </StyledHTML>
      {!isAboutPage && (
        <>
          <ShareButtons location={location} />
          <LinkEdgePosts pageContext={pageContext} />
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />
          <Profile />
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />
          {siteConfig.comments.utterances.enabled && siteConfig.comments.utterances.repoUrl && (
            <UtterancesComments innerRef={utterancesRef} />
          )}
        </>
      )}
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        date
      }
      body
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.3)
          }
        }
        date(formatString: "MM/DD/YYYY")
        category
        excerpt
        draft
        tags
        type
      }
    }
  }
`

export default PostTemplate

const StyledListingCoverImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidthSite}px;
  padding: 0.6rem;
  h1 {
    font-weight: 400;
  }
`

const StyledHTML = styled.div`
  word-wrap: break-word;
  padding: 1rem;
  font-family: ${styleConfig.fontMain + styleConfig.fontsBackUp};
  margin-top: 1rem;
  font-size: 105%;
  h1 {
    margin-top: 2.5rem;
  }

  .post-title {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 2rem;
  }

  h3 {
    margin-top: 1.3rem;
  }

  h4 {
    margin-top: 1rem;
  }

  h5 {
    margin-top: 0.8rem;
  }

  h6 {
    margin-top: 0.6rem;
  }

  p {
    margin-top: 0.9rem;
    line-height: 1.4;
  }

  blockquote {
    padding: 0.3rem 1rem;
    margin: 0.5rem 0;
    > p {
      margin-top: 0.5rem; 
    }
    > blockquote {
      border-left: none;
      font-size: 1.2rem;
      > blockquote {
        font-size: 1.3rem;
      }
    }
  }

  a {
    color: steelblue;
  }

  ul {
    list-style: none;
    margin: 1rem 0.3rem;
    li {
      display: flex;
      justify-content: flex-start;
      margin: 0.5rem 0;
      /* Custom list for ul */
      .icon-wrap {
        svg.icon-chevron-right {
          display: inline-block;
          width: 0.75rem;
          height: 0.75rem;
          margin-right: 0.5rem;
          fill: ${() => setThemeVars(styleConfig.fontColorLight, styleConfig.fontColorDark)};
        }
      }
      span.ul-children {
        width: 100%;
        & > p:first-child {
          display: inline;
        }
      }
    }
  }

  ol {
    margin: 0.5rem 1.2rem;
    li {
      margin: 1rem 0;
      margin-left: 0.3rem;
      span {
        margin-left: 0.15rem;
      }
    }
  }

  pre {
    font-family: inherit;
  }

  img {
    margin: 0.35rem 0;
  }

  .gatsby-resp-image-wrapper {
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    padding: 0.5rem 1rem;
    
    .post-title {
      font-size: 2rem;
    }

    ul,
    ol {
      margin-right: 1rem;
    }
  }
`
