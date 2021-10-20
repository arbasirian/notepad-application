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

import GlobalStyle from 'assets/styles/global.styles';

type Props = {
  route: RouteModel;
};
const Authorized = ({ route }: Props) => {
  const isAuthorized = false;

  if (isAuthorized) {
    // TODO: Design auth login form for users
    return <></>;
  }

  return (
    <MainLayout>
      <Route
        path={route.path}
        render={(props: any) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </MainLayout>
  );
};

export default Authorized;
