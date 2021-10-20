import React, { Suspense, FC } from 'react';
import { Route } from 'react-router-dom';

import { RouteModel } from 'types';
import { MainLayout } from 'layouts';

type Props = {
  route: RouteModel;
};
const Unauthorized = ({ route }: Props) => {
  return (
    <MainLayout>
      <Route
        path={route.path}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </MainLayout>
  );
};

export default Unauthorized;
