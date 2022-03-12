import React from 'react';

const Cart = () => {
	return(
			<>
				<div className="cart-overlay">
			        <aside className="cart">
			          <button className="cart-close">
			            <i className="fas fa-times" />
			          </button>
			          <header>
			            <h3 className="text-slanted">your bag</h3>
			          </header>
			          {/* cart items */}
			          <div className="cart-items">
			            {/* single cart item */}
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
			            {/* end of single cart item */}
			            {/* single cart item */}
			            <article className="cart-item">
			              <img src="https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg" className="cart-item-img" alt="product" />
			              <div className="cart-item-info">
			                <h5 className="cart-item-name">product</h5>
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
			            {/* end of single cart item */}
			          </div>
			          {/* footer */}
			          <footer>
			            <h3 className="cart-total text-slanted">total : $12.99</h3>
			            <button className="cart-checkout btn">checkout</button>
			          </footer>
			        </aside>
			      </div>
			</>
		)
}

export default Cart;