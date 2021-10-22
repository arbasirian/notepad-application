import React, { useMemo } from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { Box, Button, Flex, Title2 } from 'components';
import { statsSelector } from 'redux/selectors';
import { statsHelper } from 'helpers';
import { usePromise } from 'hooks';
import { statsAction } from 'redux/actions';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const StatsGistsCreated = () => {
  const promise = usePromise();
  const bucketList = useSelector(statsSelector.buckets);
  const filterInfo = useSelector(statsSelector.filterInfo);
  const { data, fetching } = useSelector(statsSelector.all);
  const listDetails: number[] = useMemo(
    () => statsHelper.gitsItemsPerTime(data, bucketList, filterInfo.terms_type),
    [data]
  );
  const option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: bucketList.map((item) => item.time.format('HH:mm:ss')),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: listDetails,
        type: 'line',
      },
    ],
  };
  return (
    <Box marginBottom="50px">
      <Title2 display="block" width="100% " align="center">
        Gist Created
      </Title2>
      <Spin spinning={fetching} indicator={antIcon}>
        <ReactEcharts
          option={option}
          style={{ height: 400, marginTop: '-40px' }}
        />
      </Spin>

      <Flex>
        <Button
          loading={fetching}
          onClick={() =>
            promise(
              statsAction.loadMore({
                per_page: filterInfo.per_page,
                page: filterInfo?.page ? filterInfo?.page + 1 : 2,
                since: filterInfo?.date?.format(),
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
