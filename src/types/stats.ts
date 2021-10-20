import { FetchingDataType } from 'types';

export interface StatsStateModel {
  all: FetchingDataType<any>;
}

export interface LoadAllStatsParamsModel {
  since: string;
  per_page: number;
  page: number;
}
