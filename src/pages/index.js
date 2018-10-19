import React, { Component } from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Header from '../components/Header';
import styles from '../styles/index.module.css';
import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';
import image5 from '../images/5.jpeg';
import image6 from '../images/6.jpeg';
import * as Scroll from 'react-scroll';

const Element = Scroll.Element;
const ScrollLink = Scroll.Link;

class IndexPage extends Component {
  
  render() {
    const projArray = [image1, image2, image3, image4, image5, image6];
    const projects = projArray.map((project, i) => {
      return <Project key={i} projNumber={i+1} projImage={project} history={this.props.history}/>
    });

    return (
      <Layout location={this.props.location}>
        <Header />
        <ScrollLink to='scrollHere' smooth={true} offset={-10}>
          <div className={styles.clickMe}>
            <i />
          </div>
        </ScrollLink>
        
        <div className={styles.container}>
          <Element name="scrollHere" />
          <div className={styles.projectsGrid}>
            {projects}
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

