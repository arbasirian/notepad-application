import { notification } from 'antd';

const NO_NOTIFICATION_APIS: string[] = [];

export const errorNotification = (error: any) => {
  let message =
    error?.status === 403
      ? 'Unauthorized Access'
      : error?.status === 400
      ? 'Bad Request'
      : error?.status === 401
      ? 'Login Required'
      : error?.status === 404
      ? 'Not Found'
      : 'Server Error';
  let description =
    error?.status === 403
      ? "You don't have permission to access this resource."
      : error?.status === 400
      ? "Your request doesn't meet the requirements to access this resource."
      : error?.status === 401
      ? 'Please login to access this resource.'
      : error?.status === 404
      ? "This resource doesn't exist."
      : 'An error occurred while processing your request. Please try again later.';

  notification.error({
    message,
    description,
    duration: 10,
  });
};
export const successNotification = ({
  message = 'Success',
  description = 'Successfully done',
}) => {
  notification.success({
    message,
    description,
  });
};
export const handleNoNotification = (url: string) =>
  NO_NOTIFICATION_APIS.find((item) => item === url);

export default {
  errorNotification,
  successNotification,
  handleNoNotification,
};
