import { ActionTypes } from '../constants';
import axios from 'axios';
import { toast } from "react-toastify";
import {ToastObjects} from "../../util/toastObject";

export const showCart = (cartStatus) => async(dispatch) =>{
	try{
		
		dispatch({ type: ActionTypes.CART_STATUS, payload: cartStatus });

	} catch (error){

		const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        toast.error(message, ToastObjects);
	}	
}


export const setProductDetail = (id) => async(dispatch) =>{	
	try{
		const response = await axios.get(`https://dummyjson.com/products/${id}`);
		console.log(response)
		dispatch({ type: ActionTypes.SET_PRODUCT_DETAIL, payload: response.data });

	} catch (error){

		const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        toast.error(message, ToastObjects);
	}
}

export const resetProductDetail = () => async(dispatch) =>{
	dispatch({ type: ActionTypes.RESET_PRODUCT_DETAIL});	
}