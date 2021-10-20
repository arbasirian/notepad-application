export default (dispatch: any, values: any, token?: any) =>
  new Promise((resolve, reject) =>
    dispatch({ token, ...values, resolve, reject })
  );
