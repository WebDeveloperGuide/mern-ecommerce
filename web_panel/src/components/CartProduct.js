import React from 'react';

const CartProduct = ({detail}) => {
	
	const {image, name, price} = detail;
	return(
			<>
				<article className="cart-item">
	              <img src={image} className="cart-item-img" alt="product" />
	              <div className="cart-item-info">
	                <h5 className="cart-item-name">{name}</h5>
	                <span className="cart-item-price">${price}</span>
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