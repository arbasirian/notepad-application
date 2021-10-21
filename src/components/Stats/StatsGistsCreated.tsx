import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

import { Box, Button, Flex, Title2 } from 'components';
import { useSelector } from 'react-redux';
import { statsSelector } from 'redux/selectors';
import { statsHelper } from 'helpers';
import { usePromise } from 'hooks';
import { statsAction } from 'redux/actions';
import moment from 'moment';

const StatsGistsCreated = () => {
  const promise = usePromise();
  const bucketList = useSelector(statsSelector.buckets);
  const filterInfo = useSelector(statsSelector.filterInfo);
  const { data: gistsData } = useSelector(statsSelector.all);

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
        data: statsHelper.gitsItemsPerTime(gistsData, bucketList),
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
        <Button
          onClick={() =>
            promise(
              statsAction.loadMore({
                per_page: filterInfo.per_page,
                page: filterInfo?.page ? filterInfo?.page + 1 : 2,
                since:
                  filterInfo?.date?.toISOString() || moment().toISOString(),
              })
            ).then(() =>
              promise(
                statsAction.upadteStatsFilter({
                  ...filterInfo,
                  page: filterInfo?.page ? filterInfo?.page + 1 : 2,
                })
              )
            )
          }
        >
          Load More
        </Button>
      </Flex>
    </Box>
  );
};

export default StatsGistsCreated;
