import { ActionTypes } from '../constants';
import axios from 'axios';
import { toast } from "react-toastify";
import {ToastObjects} from "../../util/toastObject";

export const getProducts = (pageNum,productsPerPage,sortBy,searchText,price) => async(dispatch) =>{
	try{
		const response = await axios.get(`products?page=${pageNum}&limit=${productsPerPage}&sortBy=${sortBy}&searchText=${searchText}&price=${price}`);
		const responseData = response.data;

		responseData['sortBy'] = sortBy;
    	responseData['searchText'] = searchText;
    	responseData['price'] = price;
		
		dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: responseData });

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