import React, { Suspense, FC } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import ROUTES from 'routes';
import { RouteModel } from 'types';
import { MainLayout } from 'layouts';
import { Authorized, Unauthorized } from 'components';

const RouteWithSubRoutes: FC<RouteModel> = (route: RouteModel) => (
  <>
    {/* TODO; Handle Share page here */}
    {route.authorized ? (
      <Authorized route={route} />
    ) : (
      <Unauthorized route={route} />
    )}
  </>
);

export default RouteWithSubRoutes;
