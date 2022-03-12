import React from 'react';

const Products = () => {
	return(
			<>
			    <section className="single-product section">
			        <div className="section-center single-product-center">
			          <img src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg" className="single-product-img img" alt="" />
			          <article className="single-product-info">
			            <div>
			              <h2 className="single-product-title">high-back bench</h2>
			              <p className="single-product-company text-slanted">by marcos</p>
			              <span className="single-product-price">$30.00</span>
			              <div className="single-product-colors">
			                <span className="product-color" />
			                <span className="product-color product-color-red" />
			              </div>
			              <p className="single-product-desc">
			                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
			                modi? Minima libero doloremque necessitatibus! Praesentium
			                recusandae quod nesciunt animi voluptatem!
			              </p>
			              <button className="addToCartBtn btn" data-id="id">add to cart</button>
			            </div>
			          </article>
			        </div>
			      </section>
			</>
		)
}

export default Products;