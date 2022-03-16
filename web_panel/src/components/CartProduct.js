import React from 'react';

const CartProduct = () => {
	return(
			<>
				<article className="cart-item">
	              <img src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg" className="cart-item-img" alt="product" />
	              <div className="cart-item-info">
	                <h5 className="cart-item-name">high-back bench</h5>
	                <span className="cart-item-price">$19.99</span>
	                <button className="cart-item-remove-btn">remove</button>
	              </div>
	              <div>
	                <button className="cart-item-increase-btn">
	                  <i className="fas fa-chevron-up" />
	                </button>
	                <span className="cart-item-amount">1</span>
	                <button className="cart-item-decrease-btn">
	                  <i className="fas fa-chevron-down" />
	                </button>
	              </div>
	            </article>
			</>
		)
}

export default CartProduct;