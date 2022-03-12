import React from 'react';
import Filters from './Filters';
import Product from './Product';

const Products = () => {
	return(
			<>
			    <section className="products">
			        <Filters/>
			        <div className="products-container">
			          <Product/>
			          <Product/>
			          <Product/>
			          <Product/>
			          <Product/>
			        </div>
			      </section>
			</>
		)
}

export default Products;