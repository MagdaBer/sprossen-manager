import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
