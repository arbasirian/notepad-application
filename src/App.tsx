import React, { FC } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import ROUTES from 'routes';
import RouteWithSubRoutes from 'RouteWithSubRoutes';

import 'assets/styles/App.css';
import { NotFoundPage } from 'pages';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/notepad-application" />
      </Route>
      {ROUTES.map((route) => (
        <RouteWithSubRoutes key={route.slug} {...route} />
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
