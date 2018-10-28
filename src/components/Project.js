import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// For this starter, all projects lead to /example-project. 
// To change Link, accept props of project id to specific page
// For example: <Link to='/project/{this.props.projNumber}>

const Project = (props) => (
  <ProjectCard>
    <img src={props.projImage} alt={'software project'}></img>
    <Link to='/example-project'>
      <ProjText>
        <h1>Project {props.projNumber}</h1>
        <p>This project is about some stuff. It uses React and Redux.</p>
      </ProjText>
    </Link>
  </ProjectCard>
)

export default Project

const ProjectCard = styled.div`
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    background: rgba(255, 255, 255, 0.9);
    opacity: 0;
    color: black;
  }
  a:hover {
    opacity: 1;
  }
`;

const ProjText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;