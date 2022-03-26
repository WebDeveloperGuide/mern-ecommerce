import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';

const ForgotPassword = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Forgot Password"/>
		 	<section className="section section-center">
		        <div className="container h-100">
			        <div className="d-flex justify-content-center h-100">
			          <div className="user_card content-card">
			          	<h4 className="content-heading">Forgot Password</h4>
			            <div className="d-flex justify-content-center form_container auth-page-container">
			              <form>
			                <div className="input-group mb-3">
			                  <div className="input-group-append">
			                    <span className="input-group-text"><i className="fas fa-envelope" /></span>
			                  </div>
			                  <input type="text" className="form-control input_user" placeholder="Email" />
			                </div>
			                <div className="d-flex justify-content-center mt-3 login_container">
			                  <button type="button" className="btn login_btn">Reset</button>
			                </div>
			              </form>
			            </div>
			            <div className="mt-4">
			              <div className="d-flex justify-content-center links">
			                Remembered? <Link to="/login" className="ml-2">Login</Link>
			              </div>			              
			            </div>
			          </div>
			        </div>
			      </div>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ForgotPassword;