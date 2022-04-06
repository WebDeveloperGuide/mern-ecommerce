import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './redux/store';
import axios from 'axios';
import './index.css';

const {userPanelLogin: { userInfo }} = store.getState();
axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

if(typeof userInfo !== 'undefined' && userInfo !== null){
	const token = userInfo.token;
	if(typeof token != undefined && token){
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;//send token
	}
}

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);