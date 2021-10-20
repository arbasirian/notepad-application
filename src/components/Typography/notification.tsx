import { notification as notificationAnt } from 'antd';

const getBaseConfig = (message: string) => ({
  message,
  description: message,
  placement: 'topRight',
});

const getCustomConfig = ({ message, ...rest }: Record<string, any>) => ({
  ...getBaseConfig(message),
  ...rest,
});

const getConfig: any = (config: Object | string) =>
  typeof config === 'object' ? getCustomConfig(config) : getBaseConfig(config);

export const notification = {
  success: (config: any) =>
    notificationAnt.success({
      ...getConfig(config),
      className: 'success',
    }),
  error: (config: any) =>
    notificationAnt.error({
      ...getConfig(config),
      className: 'error',
    }),
  info: (config: any) =>
    notificationAnt.info({
      ...getConfig(config),
      className: 'info',
    }),
  warning: (config: any) =>
    notificationAnt.warning({
      ...getConfig(config),
      className: 'warning',
    }),
};
