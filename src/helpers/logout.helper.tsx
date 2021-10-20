import React from 'react';
import { store } from 'redux/store';
import { cookiesHelper } from 'helpers';
import { dispatchHelper } from 'helpers';

const handleLogout = () => {
  const cookies = new cookiesHelper();
  cookies.removeAll();

  // Todo Handle Empty Store
};

export default handleLogout;
