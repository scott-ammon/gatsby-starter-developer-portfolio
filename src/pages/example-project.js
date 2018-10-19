import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/example-project.module.css'

const ExampleProject = (props) => (
  <Layout location={props.location}>
    <div className={styles.container}>
      <h1>Example Project Page</h1>
      <p>Describe a project in detail here, or just link to GitHub or the live site!</p>
    </div>
  </Layout>
)

export default ExampleProject