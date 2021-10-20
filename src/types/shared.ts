export interface PasswordCheckerInfoModel {
  lowercase: boolean;
  uppercase: boolean;
  specialCharacter: boolean;
  minLenght: boolean;
  digit: boolean;
  point: number;
}

export enum DeviceNames {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop',
}

export interface AuthDataPayloadModel {
  type: string;
  loginMethod: 'EMAIL' | 'SMS';
  token: string;
  expiresIn: number;
  refreshToken: string;
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
