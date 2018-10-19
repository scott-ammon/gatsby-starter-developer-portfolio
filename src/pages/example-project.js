import React from 'react'
import Layout from '../components/Layout'

const ExampleProject = (props) => (
  <Layout location={props.location}>
    <div className="container">
      <h1>Example Project Page</h1>
      <p>Describe a project in detail here, or just link to GitHub or the live site!</p>
    </div>
  </Layout>
)

export default ExampleProject
