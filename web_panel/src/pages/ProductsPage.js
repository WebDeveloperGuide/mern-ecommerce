import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductsPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Products"/>
		 	<Products/>	
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductsPage;