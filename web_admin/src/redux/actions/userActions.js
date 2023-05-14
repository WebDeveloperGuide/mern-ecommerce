import {
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
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/UserConstants";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";

// Register
export const Register = (name, email, password) => async (dispatch) => {

  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await axios.post(
      `auth/register`,
      { name, email, password }
    );

    if (!data.success) {
      toast.error(data.message, ToastObjects);
      dispatch({
        type: USER_REGISTER_FAIL,
      });
    } else {
      toast.success(data.message, ToastObjects);
      dispatch({ type: USER_REGISTER_SUCCESS });
    }

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    toast.error(message, ToastObjects);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message,
    });
  }
};

//Create User
export const createUser = (name, lastname, username, email, isAdmin, password, img) => async (dispatch) => {

  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    console.log('tạo user');
    const { data } = await axios.post(`users/create`,
      { name, lastname, username, email, isAdmin, password, img }
    );
    console.log('tạo user xong', data.success);
    console.log('tạo user xong', data.status);
    if (!data) {

      console.log(data.message);
      toast.error('Create user fail');
      dispatch({
        type: USER_REGISTER_FAIL,
      });
    } else {
      console.log('tạo thành công', data);
      toast.success('Create user success');
      dispatch({ type: USER_REGISTER_SUCCESS });
    }

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    toast.error(message);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message,
    });
  }
};

// Edit User
export const editUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_EDIT_REQUEST });
    const { data } = await axios.get(`/users/find/${id}`);
    dispatch({ type: USER_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    toast.error(message);
    dispatch({
      type: USER_EDIT_FAIL,
      payload: message,
    });
  }
};


// Update User
export const updateUser = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    console.log('update user');
    const { data } = await axios.put(`/users/${reqData._id}`,
      reqData
    );
    if (!data) {
      toast.error('Update user fail');
      dispatch({
        type: USER_UPDATE_FAIL,
      });
    } else {
      toast.success('Update user success');
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      dispatch({ type: USER_EDIT_SUCCESS, payload: data });
    }

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    toast.error(message);
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};


// Register Reset
export const RegisterReset = () => (dispatch) => {
  dispatch({ type: USER_REGISTER_SUCCESS_RESET });
};

// Login
export const Login = (email, password) => async (dispatch) => {

  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
    hideProgressBar: true,
  };

  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const response = await axios.post(
      `auth/login`,
      { email, password }
    );

    let responseData = response.data;

    if (!responseData.success || (responseData.data && responseData.data[0].isAdmin === false)) {
      if (responseData.data && responseData.data[0].isAdmin === false) {
        toast.error("You are not allowed to access admin.", ToastObjects);
      } else {
        toast.error(responseData.message, ToastObjects);
      }

      dispatch({
        type: USER_LOGIN_FAIL,
      });
    } else {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: responseData });
      localStorage.setItem("userInfo", JSON.stringify(responseData));
    }

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    toast.error(message, ToastObjects);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_LIST_RESET });
};
// Delete User
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const responseData = await axios.delete(`/users/${id}`);

    const data = responseData.data;
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
      dispatch({ USER_LIST_FAIL });
    }

    //dispatch({ type: USER_LIST_SUCCESS, payload: responseData.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    toast.error(message, ToastObjects);

    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });

  }
};

// Get Users
export const listUsers = (pageNum, usersPerPage, sortBy, searchText) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const responseData = await axios.get(`/users/admin?page=${pageNum}&limit=${usersPerPage}&sortBy=${sortBy}&searchText=${searchText}`);
    const data = responseData.data;
    data['sortBy'] = sortBy;
    data['searchText'] = searchText;

    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    toast.error(message, ToastObjects);

    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};
