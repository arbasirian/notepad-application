import { connect } from 'react-redux';
import dispatchHelper from './dispatch.helper';

export default (mapStateToProps: any) =>
  connect(mapStateToProps, (dispatch: any) => ({
    dispatch,
    promise: (args: any) => dispatchHelper(dispatch, args),
  }));
