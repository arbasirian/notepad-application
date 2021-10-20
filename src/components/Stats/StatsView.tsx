import React, { useEffect } from 'react';

import { Box, Button, Flex } from 'components';
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
        since: moment().subtract(1, 'd').format('YYYY-MM-DDTHH:MM:SS'),
      })
    );
  }, []);

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Button onClick={onHideStats}>Close Stats</Button>
      </Flex>
    </Box>
  );
};

export default StatsView;
