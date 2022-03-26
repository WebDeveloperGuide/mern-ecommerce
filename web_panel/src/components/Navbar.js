import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import {showCart} from '../redux/actions/cartActions';
import { logout } from "../redux/actions/userActions";


const NavBar = () => {
	const dispatch = useDispatch();
	const showCartStatus = useSelector((state)=> state.cart.showCart);
	const cartItems = useSelector((state)=> state.cart.cartItems);
	const userInfo = useSelector((state)=> state.userPanelLogin.userInfo);
	let isLoggedin = false;
	let userName = '';
	
	if(typeof userInfo !== 'undefined' && Object.keys(userInfo).length !== 0){
		userName = userInfo.data[0].name;
		isLoggedin = true;
	}

	let cartItemsCount = cartItems.reduce((total, item)=>{
		return total + item.qty
	}, 0);


	const toggleCart = () => {
		dispatch(showCart(!showCartStatus))
	}

	const logoutHandler = () => {
	    dispatch(logout());    
	};

	useEffect(() => {
		
		
	}, []);

	return(
			<>
				<nav className="navbar">
			        <div className="nav-center">
			          <div>
			            <button className="toggle-nav">
			              <i className="fas fa-bars" />
			            </button>
			            <ul className="nav-links">
			              <li>
			                <Link to="/" className="nav-link"> home </Link>
			              </li>
			              <li>
			                <Link to="/products" className="nav-link"> products </Link>
			              </li>
			              <li>
			                <Link to="/about" className="nav-link"> about </Link>
			              </li>
			            </ul>
			          </div>
			          <div>
			            <Link to="/"><img src={logo} className="nav-logo" alt="logo" /></Link>
			          </div>
			          <div className="auth-section">
			          	<div className="auth-container">
				        	{
				        		!isLoggedin ?
				        		(
				        			<Link to="/login" className="nav-link">Login</Link>
				        		) :				        		
				        		(
				        			<>
				        				<div className="dropdown">
									        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									          {userName}
									        </button>
									        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									          <Link className="dropdown-item" to="#">Profile</Link>
									          <Link className="dropdown-item" onClick={logoutHandler} to="#">Log Out</Link>
									        </div>
									      </div>
				        			</>
				        		)
				        	}
				        </div>
			            <div className="toggle-container">
				          	<button className="toggle-cart" onClick={toggleCart}>
				              <i className="fas fa-shopping-cart" />
				            </button>
				            <span className="cart-item-count">{cartItemsCount}</span>
				        </div>				        
			          </div>
			        </div>
			    </nav>			
			</>
		)
}

export default NavBar;