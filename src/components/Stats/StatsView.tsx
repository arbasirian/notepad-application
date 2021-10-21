import React, { useEffect } from 'react';

import {
  Box,
  Button,
  Flex,
  StatsFilePerGist,
  StatsGistsCreated,
} from 'components';
import { usePromise } from 'hooks';
import { statsAction } from 'redux/actions';
import moment from 'moment';

type Props = {
  onHideStats: () => void;
};
const StatsView = ({ onHideStats }: Props) => {
  const promise = usePromise();

  useEffect(() => {
    promise(
      statsAction.loadAll({
        per_page: 10,
        page: 1,
        since: moment().subtract(1, 'd').toISOString(),
      })
    );
  }, []);

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Button onClick={onHideStats}>Close Stats</Button>
      </Flex>

      <StatsGistsCreated />
      <StatsFilePerGist />
    </Box>
  );
};

export default StatsView;
