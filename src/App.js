import React, { useState, useEffect } from 'react';
import GlobalReset from './GlobalReset';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Music from './pages/Music/Music';
import { ThemeProvider } from 'styled-components';
import light from './theme/light';
import dark from './theme/dark';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Home setTheme={setTheme} toggleTheme={toggleTheme} />
            )}
            exact
          />
          <Route path="/music" component={Music} />
        </Switch>
        <GlobalReset />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
