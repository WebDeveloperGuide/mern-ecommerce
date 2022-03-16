import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import {showCart} from '../redux/actions/cartActions';


const NavBar = () => {
	const dispatch = useDispatch();
	const showCartStatus = useSelector((state)=> state.cart.showCart);
	const cartItemsCount = useSelector((state)=> state.cart.cartItems).length;

	const toggleCart = () => {
		dispatch(showCart(!showCartStatus))
	}

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
			          <Link to="/"><img src={logo} className="nav-logo" alt="logo" /></Link>
			          <div className="toggle-container">
			          	<button className="toggle-cart" onClick={toggleCart}>
			              <i className="fas fa-shopping-cart" />
			            </button>
			            <span className="cart-item-count">{cartItemsCount}</span>
			          </div>
			        </div>
			    </nav>			
			</>
		)
}

export default NavBar;