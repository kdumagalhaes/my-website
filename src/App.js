import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <Fragment>
      <AboutMe />
      <Projects />
      <GlobalReset />
      <ContactMe />
    </Fragment>
  );
}

export default App;
