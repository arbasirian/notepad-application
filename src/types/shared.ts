export enum DeviceNames {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop',
}
export interface PromiseHelperArgs {
  type:
    | string // single
    | [
        string, // ACTION
        string, // ACTION_REQUESTING
        string, // ACTION_SUCCESS
        string // ACTION_FAILURE
      ]; // promise
  method?: string; // 'get' | 'post' | 'put' | 'patch' | 'delete'
  url?: string;
  payload?: any;
  data?: any;
  params?: any;
  isPublic?: boolean;
}

export type PromiseHelper = (args: PromiseHelperArgs) => Promise<any>;

export type FetchingDataType<T> = {
  fetching: boolean | undefined;
  data: T;
};

export type FiltersDataType<T, F> = {
  data: T;
  filters: F;
};
