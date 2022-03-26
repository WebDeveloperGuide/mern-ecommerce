import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const CartTotal = () => {
	const cart = useSelector((state) => state.cart);
  	const { cartItems } = cart;  	
	const cartTotal = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
	return(
			<>
				<footer>
		            <h3 className="cart-total text-slanted">total : ${cartTotal}</h3>
		            <Link to="/shipping"><button className="cart-checkout btn">checkout</button></Link>
		          </footer>
			</>
		)
}

export default CartTotal;