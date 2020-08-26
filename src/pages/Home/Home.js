import React, { Fragment } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import ContactMe from '../../components/ContactMe/ContactMe';
import { Helmet } from 'react-helmet';

const Home = ({ setTheme, toggleTheme }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Kadu Magalhães - Front end developer</title>
      </Helmet>
      <AboutMe setTheme={setTheme} toggleTheme={toggleTheme} />
      <Projects />
      <ContactMe />
    </Fragment>
  );
};

export default Home;
