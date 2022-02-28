import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);