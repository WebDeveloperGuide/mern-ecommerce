import { ActionTypes } from '../constants';
import axios from 'axios';
import { toast } from "react-toastify";
import {ToastObjects} from "../../util/toastObject";

export const getProducts = () => async(dispatch) =>{
	try{
		const response = await axios.get("products");
		const responseData = response.data;
		
		dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: responseData.data });

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
		const response = await axios.get(`products/find/${id}`);
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