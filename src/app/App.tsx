import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Info from './pages/Info/Info';
import Finder from './pages/Finder/Finder';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/info/:id">
          <Info />
        </Route>
        <Route path="/finder">
          <Finder />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
