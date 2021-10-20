import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Flex } from 'components';

export class NotFoundPage extends Component {
  render() {
    return (
      <Flex height="100vh" flexDirection="column">
        <h1>404 - Not Found!</h1>
        <Link to="/">Return Home</Link>
      </Flex>
    );
  }
}

export default NotFoundPage;
