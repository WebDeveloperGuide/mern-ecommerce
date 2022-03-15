import React from 'react';

const Products = (props) => {
	const {id,thumbnail,title,price,description} = props.details;
	return(
			<>
			    <section className="single-product section">
			        <div className="section-center single-product-center">
			          <img src={thumbnail} className="single-product-img img" alt="" />
			          <article className="single-product-info">
			            <div>
			              <h2 className="single-product-title">{title}</h2>
			              <p className="single-product-company text-slanted">by marcos</p>
			              <span className="single-product-price">${price}</span>
			              <div className="single-product-colors">
			                <span className="product-color" />
			                <span className="product-color product-color-red" />
			              </div>
			              <p className="single-product-desc">
			                {description}
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