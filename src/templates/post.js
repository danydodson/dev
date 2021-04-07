import React, { useEffect, useState, useRef } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import mediumZoom from 'medium-zoom'
import storage from 'local-storage-fallback'
import { isMobile } from 'react-device-detect'
import { setThemeVars } from '../utilities/theme-helper'
import { comments } from '../../data/site-config'
import styleConfig from '../../data/style-config'
import Layout from '../components/Layout'
import Ruler from '../components/Ruler'
import Profile from '../components/Profile'
import SEO from '../components/SEO'
import { GatsbyImage } from 'gatsby-plugin-image'
import { UtterancesComments } from '../components/Comments'
import ToggleMode from '../components/Layout/ToggleMode'
import { theme } from '../components/Shared/styles-global'
import LinkEdgePosts from '../components/LinkEdgePosts'
import ShareButtons from '../components/ShareButtons'
import ChevronRight from '../../static/svgs/chevron-right.svg'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Info, Primary, Danger, Warning, Success, U, Collapsable } from '../components/MdxComponents'


const PostTemplate = function ({ pageContext, data }) {
  const { category } = pageContext
  const post = data.mdx
  const isAboutPage = post.fields.slug.includes('/pages/about/')

  const [script, setScript] = useState(undefined)
  const [texts, setTexts] = useState([])

  const location = useRef(null)
  const utterancesRef = useRef()

  useEffect(() => {
    location.current.location.href
    if (isMobile) {
      moveAnchorHeadings()
    }
    if (comments.utterances.enabled && comments.utterances.repoUrl) {
      registerUtterancesComments(comments.utterances.repoUrl)
    }
    return () => {


    }
  }, [])

  const registerUtterancesComments = () => {
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

  const zoomImages = () => {
    const targetImg = 'img'
    const targetGatsbyImg = 'gatsby-resp-image-image'
    const images = Array.from(document.querySelectorAll(targetImg))
    const filteredImages = []
    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      // Filter profile image
      const profile = document.querySelector('.img-profile')
      if (profile) {
        const isProfile = profile.contains(img)
        if (!isProfile) {
          // Set maximum width/height to non-gatsby images
          if (!img.classList.contains(targetGatsbyImg)) {
            img.classList.add('img-not-gatsby-remark')
          }
          filteredImages.push(img)
        }
      }
    }
    let mediumZoomBgColor = ''
    const savedTheme = JSON.parse(storage.getItem('theme')) || 'light'
    mediumZoomBgColor = savedTheme.mode === 'light' ? theme.bgColorLight : theme.bgColorDark

    // Apply medium zoom to images
    mediumZoom(filteredImages, {
      margin: 24,
      background: mediumZoomBgColor
    })
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

  const toggleLoading = text => {
    this.setState(prevState => {
      const updatedTexts = [...prevState.texts]
      updatedTexts.forEach(t => {
        if (t.id === text.id) {
          t.loadingChange = !t.loadingChange
        }
      })
      return {
        texts: updatedTexts
      }
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
    Collapsable,
    U
  }

  return (
    <Layout showTitle isPostTemplate>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className='switch-container' style={{ textAlign: 'end', margin: '0 1.1rem' }}>
        <ToggleMode />
      </div>

      <StyledHTML className='post-html'>
        {!isAboutPage && (
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
            <div
              className='post-data'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {post.frontmatter.tags &&
                    post.frontmatter.tags.map((tag, i) => (
                      <p
                        key={i}
                        style={{
                          margin: '0.3rem 0.3rem',
                          padding: '0.15rem 0.4rem',
                          border: '1px solid #aaa',
                          borderRadius: '5px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {tag}
                      </p>
                    ))}
                </div>
              </div>
              <p
                style={{
                  fontStyle: 'italic',
                  margin: '0',
                  marginBottom: '0.3rem'
                }}
              >
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
          {/* <ShareButtons location={this.state.location} /> */}
          {/* <LinkEdgePosts pageContext={this.props.pageContext} /> */}
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />
          <Profile />
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />

          {comments.utterances.enabled && comments.utterances.repoUrl && (
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
        tags
        excerpt
        draft
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
