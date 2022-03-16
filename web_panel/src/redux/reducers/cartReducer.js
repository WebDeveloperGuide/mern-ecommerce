import { ActionTypes } from '../constants';

const initialState = {
	cartItems: [],
	showCart:false
}

export const cartReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.CART_STATUS:
			return {...state,showCart:payload};
		case ActionTypes.ADD_ITEM_TO_CART:
	      const item = payload;
	      const existItem = state.cartItems.find((x) => x.product === item.product);
	      
	      if (existItem) {
	        return {
	          ...state,
	          cartItems: state.cartItems.map((x) =>
	            x.id === existItem.id ? item : x
	          ),
	        };
	      } else {
	        return {
	          ...state,
	          cartItems: [...state.cartItems, item],
	        };
	      }
		default:
			return state;
	}
}