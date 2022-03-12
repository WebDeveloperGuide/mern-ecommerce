import React from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const Home = () => {
	return(
		<>
		 	<NavBar/>
		 	<Slider/>
		 	<FeaturedProducts/>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default Home;