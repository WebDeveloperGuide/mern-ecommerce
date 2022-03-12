import React from 'react';

const Products = () => {
	return(
			<>
			    <article className="product">
			        <div className="product-container">
			          <img src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg" className="product-img img" alt="" />
			          <div className="product-icons">
			            <a href="single-product.html" className="product-icon">
			              <i className="fas fa-search" />
			            </a>
			            <button className="product-cart-btn product-icon" data-id={1}>
			              <i className="fas fa-shopping-cart" />
			            </button>
			          </div>
			        </div>
			        <footer>
			          <h5 className="product-name">high-back bench</h5>
			          <span className="product-price">$9.99</span>
			        </footer>
			      </article>
			</>
		)
}

export default Products;