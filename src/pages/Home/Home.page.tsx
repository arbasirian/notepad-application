import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box } from 'components';

export class HomePage extends PureComponent<RouteComponentProps> {
  render() {
    return <Box>Home Page</Box>;
  }
}

export default HomePage;
