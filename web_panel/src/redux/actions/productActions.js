import { ActionTypes } from '../constants';

export const setProducts = (products) =>{
	return{
		type:ActionTypes.SET_PRODUCTS,
		payload:products
	}
}

export const setProductDetail = (product) =>{
	return{
		type:ActionTypes.SET_PRODUCT_DETAIL,
		payload:product
	}
}

export const resetProductDetail = () =>{
	return{
		type:ActionTypes.RESET_PRODUCT_DETAIL
	}
}