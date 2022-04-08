import {
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL
} from "../constants/OrderConstants";
import { logout } from "./userActions";
import axios from "axios";
import { toast } from "react-toastify";
import {ToastObjects} from "./toastObject";

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const { data } = await axios.get(`/orders/all`);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: message,
    });
  }
};

// ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/orders/find/${id}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
};

// Set Order Delivered
export const deliverOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVERED_REQUEST });

    const response = await axios.put(
      `/orders/delivered/${orderId}`
    );

    const responseData = response.data;

    if (!responseData.success) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        toast.success(responseData.message, ToastObjects);  
        dispatch({ type: ORDER_DELIVERED_SUCCESS});
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: responseData });
    }
    
    

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload: message,
    });
  }
};


// Delete Product
export const deleteOrder = (id) => async (dispatch, getState) => {

  try {
    dispatch({ type: ORDER_DELETE_REQUEST });

    const response = await axios.delete(`/orders/${id}`);

    const responseData = response.data;

    if (!responseData.success) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        toast.success(responseData.message, ToastObjects);  
        dispatch({ type: ORDER_DELETE_SUCCESS });
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
      type: ORDER_DELETE_FAIL,
      payload: message,
    });
  }
};