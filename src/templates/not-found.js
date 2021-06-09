import React from 'react'
import Layout from '../components/Layout'
// import Page from '../components/Page'
// import Sidebar from '../components/Sidebar'
// import { useSiteMetadata } from '~hooks'

const NotFoundTemplate = () => {
  // const { title, subtitle } = useSiteMetadata()

  return (
    <Layout>
      {/* <Sidebar /> */}
      {/* <Page title="NOT FOUND"> */}
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      {/* </Page> */}
    </Layout>
  )
}

export default NotFoundTemplate
