import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { setThemeVars } from '../../../utils/set-theme'
import { theme } from '../../../components/Shared/styles-global'
import { siteConfig } from '../../../../config'
import { GatsbyImage } from 'gatsby-plugin-image'

const PostCard = ({ id, title, cover, date, path, excerpt, timeToRead }) => {

  const image = cover.childrenImageSharp[0].gatsbyImageData

  // --------------------------------------
  // BUILD TIME DATA FETCHING USING GRAPHQL
  // --------------------------------------
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        repository(name: "dev", owner: "danydodson") {
          id
          nameWithOwner
          url
        }
      }
    }
  `)

  // ----------------------
  // RUNTIME DATA FETCHING
  // ----------------------
  const [repoName, setRepoName] = useState('')
  const [watchersCount, setWatchersCount] = useState(0)
  const [starsCount, setStarsCount] = useState(0)

  useEffect(() => {
    fetch(`https://api.github.com/repos/danydodson/dev`)
      .then(res => res.json())
      .then(res => {
        setRepoName(res.name)
        setWatchersCount(res.watchers_count)
        setStarsCount(res.stargazers_count)
      })
  }, [])

  return (
    <>
      <Link to={path}>
        <StyledPostCard key={id}>
          <StyledImage image={image} alt='postImage' objectFit='cover' objectPosition='50% 50%' />

          <h3>{title}</h3>

          {siteConfig.showTimeToRead && (
            <span>
              <FontAwesomeIcon className='icon-clock' icon={faClock} size='xs' />
              {timeToRead} minute read
            </span>
          )}

          <ul>
            <li>
              <span>
                {gatsbyRepoData.github.repository
                  ? gatsbyRepoData.github.repository.url
                  : 'to get this data at build time from GitHub you need to include a GitHub access token in the request by including a .env file'
                }
              </span>
            </li>

            <li>
              <span>
                watchers count: {watchersCount}
              </span>
            </li>

            <li>
              <span>
                star count: {starsCount}
              </span>
            </li>
          </ul>

          <p>{excerpt}</p>

        </StyledPostCard>
      </Link>
    </>
  )
}

export default PostCard

const StyledImage = styled(GatsbyImage)`
    height: 200px;
`

const StyledPostCard = styled.div`
    cursor: pointer;
    padding: 1.5rem 1rem;
    transition: none;

    h3 {
        font-weight: 500;
    }

    &:hover {
        background: ${() => setThemeVars(theme.bgSubColorLight, theme.darkerColor)};
    }

    span {
        font-size: 0.8rem;
        .icon-clock {
            margin: 0 0.1rem;
        }
    }

    p {
        margin-top: 0.5rem;
        color: ${() => setThemeVars(theme.fontSubColorLight, theme.fontSubColorDark)};
    }

    @media (max-width: 500px) {
        padding: 1.5rem 1.25rem;

        h3 {
            font-size: 1.15rem;
        }

        /* Remove hover */
        &:hover {
            background: transparent;
        }
    }
`
