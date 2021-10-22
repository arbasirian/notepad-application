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
  const filterInfo = useSelector(statsSelector.filterInfo);

  // First fetch gists data
  useEffect(() => {
    const date = moment();
    const timeList = statsHelper.createBucketList(
      date,
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
          since: moment(date).format(),
        })
      ),
      promise(
        statsAction.loadAllFiles({
          per_page: filterInfo.per_page,
          page: 1,
          since: moment(date).format(),
        })
      ),
    ]);
  }, []);

  /**
   * Function that get gists base on new filters
   * @param {StatsFilterModel} filters - Selected user filter info
   */
  const handleFilterGists = (filters: StatsFilterModel) => {
    const date = filters.date;
    const timeList = statsHelper.createBucketList(
      date,
      filters.chart_qty,
      filters.terms_length,
      filters.terms_type
    );
    Promise.all([
      promise(
        statsAction.loadAll({
          per_page: filters.per_page,
          page: 1,
          since: moment(date).format(),
        })
      ),
      promise(
        statsAction.loadAllFiles({
          per_page: filters.per_page,
          page: 1,
          since: moment(date).format(),
        })
      ),
      promise(statsAction.addTimeBuckets(timeList)),
      promise(
        statsAction.upadteStatsFilter({
          ...filters,
          date: moment(date),
          page: 1,
        })
      ),
    ]);
  };

  return (
    <Box>
      <Flex justifyContent="flex-end" flexGap="10px">
        <Popover
          placement="bottomRight"
          content={
            <StatsDateFilterForm onSubmit={handleFilterGists} loading={false} />
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
