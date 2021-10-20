import { RouteModel } from 'types';
import { HomePage, NotFoundPage } from 'pages';

const ROUTES: RouteModel[] = [
  {
    path: '/home',
    slug: 'home',
    exact: true,
    authorized: true,
    component: HomePage,
    permission: 0,
  },
  {
    path: '/404',
    slug: 'not-found',
    exact: false,
    authorized: true,
    component: NotFoundPage,
    permission: 0,
  },
];

export default ROUTES;
