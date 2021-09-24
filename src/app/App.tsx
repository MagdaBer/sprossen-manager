import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
