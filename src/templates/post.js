import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { isMobile } from 'react-device-detect'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import storage from 'local-storage-fallback'
import mediumZoom from 'medium-zoom'
import styled from "styled-components"
import { setThemeVars } from '../utils/set-theme'
import Layout from '../components/layout'
import Ruler from '../components/ruler'
import Profile from '../components/profile'
import Seo from '../components/seo'
import config from '../config'
import Comments from '../components/comments'
import ToggleMode from '../components/layout/toggle-mode'
import { theme } from '../styles/global/theme'
import PostEdgeLinks from '../components/posts/post-edge-links'
import ShareButtons from '../components/share-buttons'
import { IconChevronRight } from "../components/icons"
import { Primary, Danger, Warning, Success, Info, Collapsable, Underline, } from "../components/mdx"

const PostTemplate = (props) => {
  const [location, setLocation] = useState('')
  const utterancesRef = useRef()

  useEffect(() => {
    setLocation({ location: window.location.href })
  }, [])

  // useEffect(() => {
  //   toggleLoading()
  // }, [])

  useEffect(() => {
    const script = document.createElement('script')
    if (config.comments.utterances.enabled && config.comments.utterances.repoUrl) {
      if (utterancesRef.current) {
        script.src = 'https://utteranc.es/client.js'
        script.async = true
        script.crossOrigin = 'anonymous'
        script.setAttribute('repo', config.comments.utterances.repoUrl)
        script.setAttribute('issue-term', 'pathname')
        script.setAttribute('label', 'blog-comment')
        script.setAttribute('theme', `${theme.curTheme === 'dark' ? 'github-dark' : 'github-light'}`)
        utterancesRef.current.appendChild(script)
      }
    }
    return () => {
      script.remove()
    }
  }, [])

  useEffect(() => {
    const moveAnchorHeadings = () => {
      const target = '.anchor-heading'
      const anchors = Array.from(document.querySelectorAll(target))
      anchors.forEach(anchor => {
        anchor.parentNode.appendChild(anchor)
        anchor.classList.add('after')
        anchor.classList.remove('before')
      })
    }
    if (isMobile) {
      moveAnchorHeadings()
    }
  }, [])

  useEffect(() => {
    const targetImg = 'img'
    const targetGatsbyImg = 'gatsby-resp-image-image'
    const images = Array.from(document.querySelectorAll(targetImg))
    const filteredImages = []

    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      const profile = document.querySelector('.img-profile')
      if (profile) {
        const isProfile = profile.contains(img)
        if (!isProfile) {
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
      background: mediumZoomBgColor,
    })
  }, [])

  const mdxComponents = {
    'ul.li': ({ children }) => {
      return (
        <li>
          <span className='icon-wrap'>
            <IconChevronRight className='icon-chevron-right' />
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
    Ruler: () => <Ruler widthInPercent='100' verticalMargin='0.8rem' />,
    Collapsable,
    Danger,
    Info,
    Primary,
    Warning,
    Success,
    Underline,
  }

  const cover = getImage(props.data.mdx.frontmatter.cover)
  const isAboutPage = props.data.mdx.frontmatter.slug.includes('/profile')

  return (
    <Layout showTitle={true} isPostTemplate>
      <Seo title={props.data.mdx.frontmatter.title} description={props.data.mdx.excerpt} />
      <div className='switch-container'
        style={{ textAlign: 'end', margin: '0 1.1rem' }}>
        <ToggleMode />
      </div>
      <StyledHTML className='post-html'>
        {!isAboutPage && (
          <>
            <h1 className='post-title'>{props.data.mdx.frontmatter.title}</h1>
            <GatsbyImage
              src={cover}
              data-zoom-src={cover.relativePath}
              image={cover}
              className='gatsby-resp-image-image'
              alt={props.data.mdx.frontmatter.title} />
            {/* <StyledListingCoverImage>
            </StyledListingCoverImage> */}
            <div className='post-data'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {props.data.mdx.frontmatter.tags &&
                    props.data.mdx.frontmatter.tags.map((tag, i) => (
                      <p key={i}
                        style={{
                          margin: '0.3rem 0.3rem',
                          padding: '0.15rem 0.4rem',
                          border: '1px solid #aaa',
                          borderRadius: '5px',
                          fontSize: '0.8rem',
                        }}>
                        <a href={`${tag}`}>
                          {tag}
                        </a>
                      </p>
                    ))}
                  <span style={{
                    margin: '0.3rem 0.3rem',
                    padding: '0.15rem 0.4rem',
                    border: '1px solid #aaa',
                    borderRadius: '5px',
                    fontSize: '0.8rem',
                  }} >
                    <a href={props.data.mdx.fields.categorySlug}>see more like this</a>
                  </span>
                </div>
              </div>
              <p style={{
                fontStyle: 'italic',
                margin: '0',
                marginBottom: '0.3rem',
              }}>
                {props.data.mdx.frontmatter.data}
              </p>
            </div>
            <Ruler />
          </>
        )}
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </StyledHTML>
      {!isAboutPage && (
        <>
          <ShareButtons location={location} />
          <PostEdgeLinks pageContext={props.pageContext} />
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />
          <Profile />
          <Ruler widthInPercent='97' verticalMargin='0.8rem' />
          {config.comments.utterances.enabled && config.comments.utterances.repoUrl && (
            <Comments innerRef={utterancesRef} />
          )}
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostSlug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      excerpt
      timeToRead
      fields {
        slug
        categorySlug
        tagSlugs
      }
      frontmatter {
        slug
        title
        date
        tags
        excerpt
        category
        date
        cover {
          name
          relativePath
          childImageSharp {
            gatsbyImageData
          }
          childrenImageSharp {
            gatsbyImageData
          }
          relativePath
          relativeDirectory
        }
      }
    }
  }
`

export default PostTemplate

// const StyledListingCoverImage = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* height: 55px; */
//   /* margin: 0 auto; */
//   /* max-width: ${props => props.theme.maxWidthSite}px; */
//   /* padding: 0.6rem; */
//   /* h1 {
//     font-weight: 400;
//   } */
// `

const StyledHTML = styled.div`
  word-wrap: break-word;
  padding: 1rem;
  font-family: ${config.fontMain + config.fontsBackUp};
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
          fill: ${() => setThemeVars(config.fontColorLight, config.fontColorDark)};
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
