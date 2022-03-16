import { ActionTypes } from '../constants';

const initialState = {
	cartProducts:[],
	showCart:false
}

export const cartReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.CART_STATUS:
			return {...state,showCart:payload};
		default:
			return state;
	}
}