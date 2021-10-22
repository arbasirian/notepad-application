/**
 * a functions that convert array to object base on key and key value
 * @param { any[] } array | array
 * @param { string } key | key of array item to use as object key
 * @returns return object
 */

const convertArrayToObject = (array: any[], key: string) => {
  if (array.length < 1) return {};
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key] || key]: item,
    };
  }, initialValue);
};

export default { convertArrayToObject };
