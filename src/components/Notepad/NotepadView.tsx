import React from 'react';

import { Box, Button } from 'components';

type Props = {
  onShowStats: () => void;
};
const NotepadView = ({ onShowStats }: Props) => {
  return (
    <Box>
      Here
      <Button onClick={onShowStats}>View Stats</Button>
    </Box>
  );
};

export default NotepadView;
