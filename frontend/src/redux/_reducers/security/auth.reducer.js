import { authConstants } from '../../_constants';

// let user = localStorage.getItem('username');

// const initialState = () => ({user})

export function auth(state = {}, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        _submitted: true,
        user: action.payload
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}