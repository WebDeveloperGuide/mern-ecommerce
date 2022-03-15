import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>our history</h2>
		          <span />
		        </div>
		        <p className="about-text">
		          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
		          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
		          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
		          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
		          sequi blanditiis est exercitationem molestiae delectus saepe odio
		          eligendi modi porro eaque in libero minus unde sapiente consectetur
		          architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
		          totam velit saepe sed quos similique amet. Ex, voluptate accusamus
		          nesciunt totam vitae esse iste.
		        </p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;