import React from 'react';
import { ProjectsDiv, BackgroundDiv, GridDiv } from './ProjectsStyles';
import Card from './Cards/Card';
import { Icon, } from '@iconify/react';
import githubAlt from '@iconify/icons-zmdi/github-alt';

const Projects = () => {

  return (
    <ProjectsDiv id="projects">
      <BackgroundDiv>
        <h2><Icon icon={githubAlt} width="15px"/> myProjects</h2>
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
