import React, {useEffect,useState} from 'react';
import logo from '../images/logo.svg';

const NavBar = () => {

	const [isCartOpen,setIsCartOpen] = useState(false);
	const toggleCart = () => {
		setIsCartOpen(true);
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
			                <a href="index.html" className="nav-link"> home </a>
			              </li>
			              <li>
			                <a href="products.html" className="nav-link"> products </a>
			              </li>
			              <li>
			                <a href="about.html" className="nav-link"> about </a>
			              </li>
			            </ul>
			          </div>
			          <img src={logo} className="nav-logo" alt="logo" />
			          <div className="toggle-container">
			          	<button className="toggle-cart" onClick={toggleCart}>
			              <i className="fas fa-shopping-cart" />
			            </button>
			            <span className="cart-item-count">2</span>
			          </div>
			        </div>
			    </nav>			
			</>
		)
}

export default NavBar;