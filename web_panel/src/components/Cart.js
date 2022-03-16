import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import {showCart} from '../redux/actions/cartActions';

const Cart = () => {
	const showCartStatus = useSelector((state)=> state.cart.showCart);
	const dispatch = useDispatch();
	const closeCart = () => {
		dispatch(showCart(false))
	}

	return(
			<>
				<div className= { 'cart-overlay' + (showCartStatus ? ' show' : '')}>
			        <aside className="cart">
			          <button className="cart-close" onClick={closeCart}>
			            <i className="fas fa-times" />
			          </button>
			          <header>
			            <h3 className="text-slanted">your bag</h3>
			          </header>
			          {/* cart items */}
			          <div className="cart-items">
			            <CartProduct/>			            
			            <CartProduct/>
			          </div>
			          <CartTotal/>
			        </aside>
			      </div>
			</>
		)
}

export default Cart;