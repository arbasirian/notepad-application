import { useDispatch } from 'react-redux';

import { PromiseHelperArgs } from 'types';
import { dispatchHelper } from 'helpers';

const usePromise = () => {
  const dispatch = useDispatch();

  return (args: PromiseHelperArgs) => dispatchHelper(dispatch, args);
};

export default usePromise;
