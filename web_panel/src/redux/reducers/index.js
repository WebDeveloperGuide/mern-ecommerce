import { combineReducers } from "redux";
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import {userLoginReducer,userRegisterReducer} from './userReducers';

const reducers = combineReducers({
	allProducts:productReducer,
	cart:cartReducer,
	userPanelLogin: userLoginReducer,
  	userRegister: userRegisterReducer
});

export default reducers;
