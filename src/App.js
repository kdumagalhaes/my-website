import React from 'react';
import GlobalReset from './GlobalReset';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Music from './pages/Music/Music';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/music" component={Music} />
      </Switch>
      <GlobalReset />
    </BrowserRouter>
  );
}

export default App;
