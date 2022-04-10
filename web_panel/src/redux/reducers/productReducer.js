import { ActionTypes } from '../constants';
const { FETCH_PRODUCTS, SET_PRODUCT_DETAIL, RESET_PRODUCT_DETAIL, RESET_PRODUCTS} = ActionTypes;

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
		case FETCH_PRODUCTS:
			return {...state,products:[...state.products,...payload.data], numOfPages:payload.numOfPages, sortBy:payload.sortBy, searchText:payload.searchText, price:payload.price};
		case SET_PRODUCT_DETAIL:
			return {...state,productDetail:payload};
		case RESET_PRODUCT_DETAIL:
			return {...state,productDetail:[]};
		case RESET_PRODUCTS:
			return {...state,products:[]};
		default:
			return state;
	}
}