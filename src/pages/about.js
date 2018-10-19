import React from 'react'
import Layout from '../components/Layout'

const AboutPage = (props) => (
  <Layout location={props.location}>
    <div className="container">
      <h1>Full Stack Developer</h1>
      <h5>You're a really awesome software developer. Tell people all about that.</h5>
      <p>Stuff about you goes here.</p>
    </div>
  </Layout>
)

export default AboutPage
