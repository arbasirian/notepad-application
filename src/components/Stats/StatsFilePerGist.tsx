import React, { useMemo } from 'react';
import moment from 'moment';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { Box, Button, Flex, Title2 } from 'components';
import { usePromise } from 'hooks';
import { statsHelper } from 'helpers';
import { statsSelector } from 'redux/selectors';
import { statsAction } from 'redux/actions';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const StatsFilePerGist = () => {
  const promise = usePromise();
  const bucketList = useSelector(statsSelector.buckets);
  const filterInfo = useSelector(statsSelector.filterInfo);
  const { data, fetching } = useSelector(statsSelector.allFiles);

  const listDetails: number[] = useMemo(
    () => statsHelper.gitsFilesPerTime(data, bucketList, filterInfo.terms_type),
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
        Files Per Gist
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
              statsAction.loadMoreFiles({
                per_page: filterInfo.per_page,
                page: filterInfo?.pageFiles ? filterInfo?.pageFiles + 1 : 2,
                since: filterInfo?.date?.format() || moment().format(),
              })
            ).then(() =>
              promise(
                statsAction.upadteStatsFilter({
                  ...filterInfo,
                  pageFiles: filterInfo?.pageFiles
                    ? filterInfo?.pageFiles + 1
                    : 2,
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

export default StatsFilePerGist;
