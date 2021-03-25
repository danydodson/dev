import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet title='404: Not found' />
    <h1 style={{ textAlign: 'center', fontSize: '5rem', color: '#bbb' }}>(·_·)</h1>
    <h1 style={{ textAlign: 'center' }}>NOT FOUND</h1>
    <p style={{ textAlign: 'center' }}>You just hit a route that does not exist... the sadness..</p>
  </Layout>
)

export default NotFoundPage
