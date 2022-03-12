import React from 'react';

const FeaturedProducts = () => {
	return(
			<>
				<section className="section featured">
			        <div className="title">
			          <span />
			          <h2>Featured Products</h2>
			          <span />
			        </div>
			        <div className="section-center featured-center">
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
			          <article className="product">
			            <div className="product-container">
			              <img src="https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg" className="product-img img" alt="" />
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
			              <h5 className="product-name">leather sofa</h5>
			              <span className="product-price">$9.99</span>
			            </footer>
			          </article>
			          <article className="product">
			            <div className="product-container">
			              <img src="https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg" className="product-img img" alt="" />
			              <div className="product-icons">
			                <a href="single-product.html" className="product-icon">
			                  <i className="fas fa-search" />
			                </a>
			                <button className="product-cart-btn product-icon">
			                  <i className="fas fa-shopping-cart" />
			                </button>
			              </div>
			            </div>
			            <footer>
			              <h5 className="product-name">entertainment center</h5>
			              <span className="product-price">$9.99</span>
			            </footer>
			          </article>			          
			        </div>
			        <a href="products.html" className="btn"> all products </a>
			      </section>
			</>
		)
}

export default FeaturedProducts;