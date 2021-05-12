import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import UseTheme from '../../hooks/use-theme'
import CodeBlockStyles from '../../styles/code'
import { GlobalStyles } from '../../styles/global'
import { theme } from '../../styles/global/theme'
import Footer from '../Footer'
import Header from '../Header'
import ScrollTopButton from '../ScrollTopButton'

config.autoAddCss = false

const Layout = ({ children, showTitle, isPostTemplate }) => {

  const setTheme = UseTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const childrenElement = (
    <>
      <GlobalStyles />
      <CodeBlockStyles />
      <Header siteTitle={data.site.siteMetadata.title} showTitle={showTitle} isPostTemplate={isPostTemplate} />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <ScrollTopButton scrollStepInPx='150' delayInMs='5' />
    </>
  )

  return (
    // Used to set theme
    <ThemeProvider theme={setTheme}>
      {/* Used for global variables */}
      <ThemeProvider theme={theme}>
        {isPostTemplate ? <div className='post-bg-color'>{childrenElement}</div> : <>{childrenElement}</>}
      </ThemeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showTitle: PropTypes.bool,
  isPostTemplate: PropTypes.bool,
}

export default Layout

const StyledMain = styled.main`
    position: relative;
    margin: 0 auto;
    max-width: ${theme.maxWidthSite};
`
