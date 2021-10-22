import { DurationInputArg2, Moment } from 'moment';
import { FetchingDataType, FiltersDataType } from 'types';

export interface StatsStateModel {
  all: FetchingDataType<GistModel[]>;
  allFiles: FetchingDataType<GistModel[]>;
  time_buckets: TimeBucketModel[];
  filter_info: StatsFilterModel;
}

export interface TimeBucketModel {
  time: Moment;
  second: number;
}
export interface LoadAllStatsParamsModel {
  since: string;
  per_page: number;
  page: number;
}

export interface StatsFilterModel {
  date: Moment;
  chart_qty: number;
  per_page: number;
  page?: number;
  pageFiles?: number;
  terms_type: DurationInputArg2;
  terms_length: number;
}

export interface GistModel {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: {
    [index: string]: GistFileModel;
  };
  public: true;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: unknown; // TODO
  comments_url: string;
  owner: GistOwnerModel;
  truncated: boolean;
}

export interface GistFileModel {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
}

export interface GistOwnerModel {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
