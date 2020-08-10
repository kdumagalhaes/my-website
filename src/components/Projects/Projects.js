import React from 'react';
import { ProjectsDiv, BackgroundDiv, GridDiv } from './ProjectsStyles';
import Card from './Cards/Card';

const Projects = () => {

  return (
    <ProjectsDiv id="projects">
      <BackgroundDiv>
        <h2>myProjects</h2>
      </BackgroundDiv>
      <GridDiv>
        <Card repo="the-book-finder"/>
        <Card repo="fylo-landing-page-reactjs"/>
        <Card repo="todo-reactjs"/>
        <Card repo="pricing-component-reactjs"/>
        <Card repo="data-storage-front-end"/>
        <Card repo="sign-in-js"/>
        <Card repo="my-website"/>
        <Card repo="four-card-feature-front-end"/>
      </GridDiv>
    </ProjectsDiv>
  );
};

export default Projects;
