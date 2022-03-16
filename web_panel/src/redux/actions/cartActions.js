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


export const addToCart = (product,qty) => (dispatch,getState) => {
	try{
		
		dispatch({
		    type: ActionTypes.ADD_ITEM_TO_CART,
		    payload: {
		      id: product.id,
		      name: product.title,
		      image: product.thumbnail,
		      price: product.price,
		      countInStock: product.stock,
		      qty,
		    }
		  });

		  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

		  toast.error("Added to Cart", ToastObjects);

	}catch (error){
		const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        toast.error(message, ToastObjects);
	}
}