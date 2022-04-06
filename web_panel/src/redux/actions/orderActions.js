import { OrderConstants,ActionTypes } from '../constants';
import axios from 'axios';
import { toast } from "react-toastify";
import {ToastObjects} from "../../util/toastObject";
import {logout} from './userActions';

const { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL} = OrderConstants;
const { CLEAR_CART_ITEM } = ActionTypes;

export const createOrder = (reqData) => async (dispatch, getState) => {
    
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const response = await axios.post(
        `orders/`,
        reqData
      );

      const responseData = response.data;

      if (!responseData.status) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        toast.success(responseData.message, ToastObjects);        
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: responseData });
        dispatch({ type: CLEAR_CART_ITEM });
        localStorage.removeItem('cartItems');
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
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };  

export const processPayment = (reqData) => async (dispatch, getState) => {
    
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const response = await axios.post(
        "checkout/payment/",
        reqData
      );

      const responseData = response.data;

      if (!responseData.status) {
        toast.error(responseData.message, ToastObjects);  
      }else{
        dispatch(createOrder(reqData))
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
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };  