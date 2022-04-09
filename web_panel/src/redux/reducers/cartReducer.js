import { ActionTypes } from '../constants';

const getLocalCartItems = () => {
  let cartItems = localStorage.getItem('cartItems')
  if (cartItems) {
    return JSON.parse(localStorage.getItem('cartItems'))
  } else {
    return []
  }
}

const getLocalShippingAddress = () => {
  let shippingInfo = localStorage.getItem('shippingAddress')
  if (shippingInfo) {
    return JSON.parse(localStorage.getItem('shippingAddress'))
  } else {
    return {}
  }
}

const initialState = {
	cartItems: getLocalCartItems(),
	showCart:false,
	shippingAddress: getLocalShippingAddress()
}

export const cartReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.CART_STATUS:
			return {...state,showCart:payload};
		case ActionTypes.ADD_ITEM_TO_CART:
	      const newItem = payload;
	      const existItem = state.cartItems.find((x) => x.id === newItem.id);

	      if (existItem) {
	      	const tempNewCart = state.cartItems.map((item) => {	      		
	      	  if (item.id === existItem.id) {
		          let newQty = parseInt(newItem.qty) + parseInt(existItem.qty)
		          return { ...item, qty: newQty }		        		        
		      }
		      return item
		    });
	     	return { ...state, cartItems: tempNewCart }
	        
	      } else {
	        return {
	          ...state,
	          cartItems: [...state.cartItems, newItem],
	        };
	      }
	    case ActionTypes.INCREASE_ITEM:
	      	const tempIncCart = state.cartItems.map((item) => {
		      if (item.id === payload) {		        
		          let newQty = item.qty + 1		          
		          return { ...item, qty: newQty }		        		        
		      }
		      return item
		    });
	     	return { ...state, cartItems: tempIncCart }
	    case ActionTypes.DECREASE_ITEM:
	      const tempDescCart = state.cartItems.map((item) => {
		      if (item.id === payload) {		        
		          let newQty = item.qty - 1
		          if(newQty === 0){
		      		return item    	
		          }
		          return { ...item, qty: newQty }		        		        
		      }
		      return item
		    });
	      	return { ...state, cartItems: tempDescCart }
	    case ActionTypes.CART_REMOVE_ITEM:
			return {
		        ...state,
		        cartItems: state.cartItems.filter((x) => x.id !== payload),
		      };
		case ActionTypes.CART_SAVE_SHIPPING_ADDRESS:
	      return {
	        ...state,
	        shippingAddress: payload,
	      };
	    case ActionTypes.CART_REMOVE_SHIPPING_ADDRESS:
	      return {
	        ...state,
	        shippingAddress: {},
	      };
	    case ActionTypes.CLEAR_CART_ITEM:
			return {
		        ...state,
		        cartItems: []
		      };	    
		default:
			return state;
	}
}