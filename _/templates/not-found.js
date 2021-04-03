import React from 'react'
// import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
// import Page from '../components/Page'
// import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  // const { title, subtitle } = useSiteMetadata()
  return (
    <Layout
      title={`Not Found - ${title}`}
      description={subtitle}
    >
      {/* <Sidebar /> */}
      {/* <Page title="NOT FOUND"> */}
      <h1 style={{ textAlign: 'center', fontSize: '5rem', color: '#bbb' }}> (·_·) </h1>
      <h1 style={{ textAlign: 'center' }}> NOT FOUND </h1>
      <p style={{ textAlign: 'center' }}> You just hit a route that doesn&#39;t exist... the sadness.. </p>
      {/* </Page> */}
    </Layout>
  )
}

export default NotFoundTemplate
