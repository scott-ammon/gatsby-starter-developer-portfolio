import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/about.module.css'

const AboutPage = (props) => (
  <Layout location={props.location}>
    <h1 className={styles.title}>Full Stack Developer</h1>
    <h5 className={styles.description}>
      You're a really awesome software developer. Tell people all about that.
    </h5>
    <p>
      Stuff about you goes here.
    </p>
  </Layout>
)

export default AboutPage
