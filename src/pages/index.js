import React, { Component } from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import Header from '../components/Header'
import styled from 'styled-components'
import image1 from '../images/1.jpeg'
import image2 from '../images/2.jpeg'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpeg'
import image5 from '../images/5.jpeg'
import image6 from '../images/6.jpeg'
import * as Scroll from 'react-scroll'

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
          <ClickArrow>
            <i />
          </ClickArrow>
        </ScrollLink>
        <div className="container">
          <Element name="scrollHere" />
          <ProjectGrid>
            {projects}
          </ProjectGrid>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

const ClickArrow = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
  transform: translate(0, -50px);
  animation: bounce 0.7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  i {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 8px;
    transform: rotate(45deg);
  }
  @keyframes bounce {
    from { transform: translate(0, -50px);     }
    to   { transform: translate(0, -60px); }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  padding-top: 5rem;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: 350px;
  grid-auto-flow: dense;

  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(90vw, 1fr));
    grid-auto-rows: 300px;
    grid-auto-flow: dense;
  }
`;