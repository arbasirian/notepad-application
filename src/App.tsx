import React, { Suspense, FC } from 'react';
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
  <Suspense fallback={() => console.log(`111`, 111)}>
    <Router>
      <Switch>
        {ROUTES.map((route) => (
          <RouteWithSubRoutes key={route.slug} {...route} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
