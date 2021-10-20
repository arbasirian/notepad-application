import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, NotepadView, StatsView } from 'components';
import { PromiseHelper } from 'types';

type Props = {
  promise: PromiseHelper;
} & RouteComponentProps;
type State = {
  showStats: boolean;
};
export class HomePage extends PureComponent<Props, State> {
  state = {
    showStats: false,
  };
  render() {
    const { showStats } = this.state;
    return (
      <Box>
        <Box>{showStats ? <StatsView /> : <NotepadView />}</Box>
      </Box>
    );
  }
}

export default HomePage;
