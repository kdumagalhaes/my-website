import React, { Fragment } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import ContactMe from '../../components/ContactMe/ContactMe';

const Home = () => {
  return (
    <Fragment>
      <AboutMe />
      <Projects />
      <ContactMe />
    </Fragment>
  );
};

export default Home