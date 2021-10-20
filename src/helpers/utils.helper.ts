import { PasswordCheckerInfoModel } from 'types';
import { notification } from 'components';

/**
 * a functions that check the password pont
 * @param { PasswordCheckerInfoModel } passowrdInfo | input string
 * @returns the number that define password point
 */
export const checkPasswordPoint = (
  passwordInfo: PasswordCheckerInfoModel
): number => {
  const { digit, lowercase, minLenght, uppercase, specialCharacter } =
    passwordInfo;
  if (digit && lowercase && minLenght && uppercase && specialCharacter)
    return 3;
  if (!minLenght) return 1;
  return 2;
};

/**
 * a functions that check the password strength
 * @param { string } password | input string
 * @param { number } length | min length of password | optional
 * @returns the object that contain information about password
 */
export const passwordStrengthChecker = (
  password: string,
  length: number = 8
): PasswordCheckerInfoModel => {
  let passwordInfo: PasswordCheckerInfoModel = {
    lowercase: false,
    uppercase: false,
    digit: false,
    minLenght: false,
    specialCharacter: false,
    point: 0,
  };

  if (!password) return passwordInfo;
  if (password.length >= length) passwordInfo.minLenght = true;
  if (/\d+/gm.test(password)) passwordInfo.digit = true;
  if (/[A-Z]/gm.test(password)) passwordInfo.uppercase = true;
  if (/[a-z]/gm.test(password)) passwordInfo.lowercase = true;
  if (/[!@#$%^&*()-+]/gm.test(password)) passwordInfo.specialCharacter = true;
  passwordInfo.point = checkPasswordPoint(passwordInfo);
  return passwordInfo;
};

/**
 * function that copy text to clipboard and show notifiction
 * @param { string } text | string to copy
 */

export const copyToClipboard = (text: string) => () => {
  try {
    navigator.clipboard.writeText(text);
    notification.info('در حافظه کپی شد!');
  } catch (_) {
    notification.error('کپی ناموفق بود!');
  }
};

export default {
  checkPasswordPoint,
  passwordStrengthChecker,
  copyToClipboard,
};
