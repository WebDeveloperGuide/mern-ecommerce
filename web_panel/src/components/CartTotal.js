import React from 'react';

const CartTotal = () => {
	return(
			<>
				<footer>
		            <h3 className="cart-total text-slanted">total : $12.99</h3>
		            <button className="cart-checkout btn">checkout</button>
		          </footer>
			</>
		)
}

export default CartTotal;