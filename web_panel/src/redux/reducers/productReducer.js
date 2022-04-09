import { ActionTypes } from '../constants';

const initialState = {
	products:[],
	productDetail:[],
	numOfPages:0,
	sortBy: '',
	searchText:'',
	price:'10000'
}

export const productReducer = (state = initialState,{type,payload}) => {
	switch(type){
		case ActionTypes.FETCH_PRODUCTS:
			return {...state,products:payload.data, numOfPages:payload.numOfPages, sortBy:payload.sortBy, searchText:payload.searchText, price:payload.price};
		case ActionTypes.SET_PRODUCT_DETAIL:
			return {...state,productDetail:payload};
		case ActionTypes.RESET_PRODUCT_DETAIL:
			return {...state,productDetail:[]};
		default:
			return state;
	}
}