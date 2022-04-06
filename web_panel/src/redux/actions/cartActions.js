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
		      id: product._id,
		      name: product.title,
		      image: product.image,
		      price: product.price,
		      countInStock: product.stock,
		      qty,
		    }
		  });

		  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

		  toast.success("Added to Cart", ToastObjects);

	}catch (error){
		const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        toast.error(message, ToastObjects);
	}
}

// Remove item from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.CART_REMOVE_ITEM,
    payload: id,
  });
	toast.success("Item Removed From Cart", ToastObjects);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Remove all item from cart
export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.CLEAR_CART_ITEM
  });  
  localStorage.setItem("cartItems", JSON.stringify([]));
};

// Remove item from cart
export const increaseProductQty = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.INCREASE_ITEM,
    payload: id,
  });
	
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Remove item from cart
export const decreaseProductQty = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.DECREASE_ITEM,
    payload: id,
  });
	
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// Save Shipping Address
export const saveShippingAddress = (shippingData) => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_SAVE_SHIPPING_ADDRESS,
    payload: shippingData,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(shippingData));
};