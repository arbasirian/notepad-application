import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Popover } from 'antd';

import { usePromise } from 'hooks';
import { statsAction } from 'redux/actions';
import { statsSelector } from 'redux/selectors';
import { statsHelper } from 'helpers';
import { StatsFilterModel } from 'types';
import {
  Box,
  Button,
  Flex,
  StatsDateFilterForm,
  StatsFilePerGist,
  StatsGistsCreated,
} from 'components';

type Props = {
  onHideStats: () => void;
};
const StatsView = ({ onHideStats }: Props) => {
  const promise = usePromise();
  const [actionLoading, setLoading] = useState(false);

  const filterInfo = useSelector(statsSelector.filterInfo);

  useEffect(() => {
    const timeList = statsHelper.createBucketList(
      filterInfo.date || moment(),
      filterInfo.chart_qty,
      filterInfo.terms_length,
      filterInfo.terms_type
    );
    Promise.all([
      promise(statsAction.addTimeBuckets(timeList)),
      promise(
        statsAction.loadAll({
          per_page: filterInfo.per_page,
          page: 1,
          since: timeList[0].time.toISOString(),
        })
      ),
    ]);
  }, []);

  const handleFilterGists = (filters: StatsFilterModel) => {
    setLoading(true);
    const timeList = statsHelper.createBucketList(
      filters.date || moment(),
      filters.chart_qty,
      filters.terms_length,
      filters.terms_type
    );
    promise(
      statsAction.loadAll({
        per_page: filters.per_page,
        page: 1,
        since: timeList[0].time.toISOString(),
      })
    ).then(() => {
      Promise.all([
        promise(statsAction.addTimeBuckets(timeList)),
        promise(statsAction.upadteStatsFilter(filters)),
      ]);

      setLoading(false);
    });
  };

  return (
    <Box>
      <Flex justifyContent="flex-end" flexGap="10px">
        <Popover
          placement="bottomRight"
          content={
            <StatsDateFilterForm
              onSubmit={handleFilterGists}
              loading={actionLoading}
            />
          }
          trigger="click"
        >
          <Button type="blue">Filter Gists</Button>
        </Popover>
        <Button onClick={onHideStats}>Close Stats</Button>
      </Flex>

      <StatsGistsCreated />
      <StatsFilePerGist />
    </Box>
  );
};

export default StatsView;
