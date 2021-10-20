import React from 'react';

import { Box, Button, Flex } from 'components';

type Props = {
  onHideStats: () => void;
};
const StatsView = ({ onHideStats }: Props) => {
  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Button onClick={onHideStats}>Close Stats</Button>
      </Flex>
    </Box>
  );
};

export default StatsView;
