import ActionTypes from '../actionTypes';

export function handleToggleSideMenu(payload: boolean) {
  return {
    type: ActionTypes.TOGGLE_SIDE_MENU,
    payload,
  };
}
