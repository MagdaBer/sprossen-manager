import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import InfoPage from './pages/InfoPage';
import FinderPage from './pages/FinderPage';
import MySproutsPage from './pages/MySproutsPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/info/:id">
          <InfoPage />
        </Route>
        <Route path="/mysprouts">
          <MySproutsPage />
        </Route>
        <Route path="/finder">
          <FinderPage />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
