import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

import { Box, Button, Flex, Title2 } from 'components';
import { useSelector } from 'react-redux';
import { statsSelector } from 'redux/selectors';

const StatsGistsCreated = () => {
  const bucketList = useSelector(statsSelector.buckets);
  const filterInfo = useSelector(statsSelector.filterInfo);
  const option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: bucketList.map((item) =>
        item.time.format(filterInfo.terms_type === 'day' ? 'MM-DD' : 'hh:mm:ss')
      ),
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
