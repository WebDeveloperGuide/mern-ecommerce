import {UserConstants} from "../constants";
const {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_SUCCESS_RESET,
  USER_LOGOUT,
} = UserConstants;


const getLocalUserInfo = () => {
  let userInfo = localStorage.getItem('userPanelInfo')
  if (userInfo) {
    return JSON.parse(localStorage.getItem('userPanelInfo'))
  } else {
    return {}
  }
}

// Register
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, register_status: true };
    case USER_REGISTER_SUCCESS_RESET:
      return { loading: false, register_status: false };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// Login
export const userLoginReducer = (state = {userInfo:getLocalUserInfo()}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};