import UniversalCookies from 'universal-cookie';

import { AuthDataPayloadModel } from 'types';

type CookieOptions = {
  path: string;
  domain?: string;
};

// Todo : Please change the name of cookie to your current project

type CookieKey =
  | 'notepad_application_token'
  | 'notepad_application_fingerprint'
  | 'notepad_application_refresh_token'
  | 'notepad_application_token_expire_date';

interface ICustomCookies {
  get: (key: CookieKey) => string;
  set: (key: CookieKey, value: any) => void;
  setAll: (data: any) => void;
  remove: (key: CookieKey) => void;
  removeAll: (keys: CookieKey[]) => void;
}

const cookies = new UniversalCookies();
export default class CustomCookies implements ICustomCookies {
  static defaultOptions = { path: '/' };
  private domain?: string;

  constructor(domain?: string) {
    if (domain && domain !== 'localhost') {
      this.domain = domain;
    }
  }

  private getServerOptions = (): CookieOptions =>
    this.domain
      ? { domain: this.domain, ...CustomCookies.defaultOptions }
      : CustomCookies.defaultOptions;

  private getClientOptions = (): CookieOptions => {
    const { hostname } = window.location;

    return {
      ...(hostname &&
        hostname !== 'localhost' && { domain: window.location.hostname }),
      ...CustomCookies.defaultOptions,
    };
  };

  private getOptions = (): CookieOptions =>
    typeof window === 'object'
      ? this.getClientOptions()
      : this.getServerOptions();

  public get = (key: CookieKey) => cookies.get(key);

  public set = (key: CookieKey, value: any): void => {
    cookies.set(key, value, this.getOptions());
  };

  public setAll = (data: AuthDataPayloadModel) => {
    if (!data) return;

    this.set('notepad_application_token', data.token);
    const baseDateObj = new Date();
    const expireDateObj = new Date();
    expireDateObj.setTime(baseDateObj.getTime() + data.expiresIn * 1000);
    this.set('notepad_application_token_expire_date', expireDateObj.toString());
    this.set('notepad_application_refresh_token', data.refreshToken);
  };

  public remove = (key: string): void => {
    cookies.remove(key, this.getOptions());
  };

  public removeAll = (
    keys: CookieKey[] = [
      'notepad_application_token',
      'notepad_application_fingerprint',
      'notepad_application_refresh_token',
      'notepad_application_token_expire_date',
    ]
  ): void => {
    keys.forEach((key) => {
      this.remove(key);
    });
  };
}
