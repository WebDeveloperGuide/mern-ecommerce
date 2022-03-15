import { ActionTypes } from '../constants';

const initialState = {
	products:[],
	productDetail:[]
}

export const productReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.SET_PRODUCTS:
			return {...state,products:payload};
		case ActionTypes.SET_PRODUCT_DETAIL:
			return {...state,productDetail:payload};
		case ActionTypes.RESET_PRODUCT_DETAIL:
			return {...state,productDetail:[]};
		default:
			return state;
	}
}