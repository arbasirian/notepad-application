import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

import { Box, Button, Flex, Title2 } from 'components';

const StatsGistsCreated = () => {
  const option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };
  return (
    <Box marginBottom="50px">
      <Title2 display="block" width="100% " align="center">
        Gist Created
      </Title2>
      <ReactEcharts
        option={option}
        style={{ height: 400, marginTop: '-40px' }}
      />
      <Flex>
        <Button>Load More</Button>
      </Flex>
    </Box>
  );
};

export default StatsGistsCreated;
