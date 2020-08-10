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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridDiv>
    </ProjectsDiv>
  );
};

export default Projects;
