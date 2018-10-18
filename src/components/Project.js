import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/project.module.css'

// Change Link to accept props of project id to link specific page
// For example: <Link to='/project/{this.props.projNumber}>

const Project = (props) => (
  <div className={styles.projectCard}>
    <img src={props.projImage} alt={'software project'}></img>
    <Link to='/example-project' className={styles.overlay}>
      <div className={styles.projectName}>
        <h1>Project {props.projNumber}</h1>
        <p>This project is about some stuff. It uses React and Redux.</p>
      </div>
    </Link>
  </div>
)

export default Project
