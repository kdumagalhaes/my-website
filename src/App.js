import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'

function App() {
  return (
    <Fragment>
        <AboutMe />
        <Projects />
      <GlobalReset />
    </Fragment>
  );
}

export default App;
