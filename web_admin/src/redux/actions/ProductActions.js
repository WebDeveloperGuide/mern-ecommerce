import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/ProductConstants";
import axios from "axios";
import { logout } from "./userActions";
import { toast } from "react-toastify";
import {ToastObjects} from "./toastObject";

export const listProducts = (pageNum,productsPerPage,sortBy,searchText) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const responseData = await axios.get(`/products?page=${pageNum}&limit=${productsPerPage}&sortBy=${sortBy}&searchText=${searchText}`);
    const data = responseData.data;
    data['sortBy'] = sortBy;
    data['searchText'] = searchText;

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
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
      type: PRODUCT_LIST_FAIL,
      payload: message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch, getState) => {

  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const response = await axios.delete(`/products/${id}`);

    const responseData = response.data;

    if (!responseData.success) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        toast.success(responseData.message, ToastObjects);  
        dispatch({ type: PRODUCT_DELETE_SUCCESS });
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
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

// Create Product
export const createProduct = (reqData) => async (dispatch, getState) => {
    
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

      const response = await axios.post(
        `products/`,
        reqData
      );

      const responseData = response.data;

      if (!responseData.status) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        toast.success(responseData.message, ToastObjects);        
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: responseData.data });  
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
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

// Edit Product
export const editProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });
    const { data } = await axios.get(`/products/find/${id}`);
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message,
    });
  }
};

// Update Product
export const updateProduct = (reqData) => async (dispatch, getState) => {

  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    let _id = 0;
    const { data } = await axios.put(
      `/products/${reqData._id}`,
      reqData      
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};
