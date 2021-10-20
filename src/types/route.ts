import { Component } from 'react';

export interface RouteModel {
  path: string;
  slug: string;
  exact: boolean;
  authorized: boolean;
  component?: any;
  routes?: RouteModel[];
  permission: number;
}
