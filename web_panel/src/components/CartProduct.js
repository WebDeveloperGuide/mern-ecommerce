import React from 'react';
import {useDispatch} from 'react-redux';
import {removeFromCart, increaseProductQty, decreaseProductQty} from '../redux/actions/cartActions';

const CartProduct = ({detail}) => {
	const {id,image, name, price, qty} = detail;
	const dispatch = useDispatch();
	const removeItemFromCart = (id) =>{
		dispatch(removeFromCart(id));
	}

	const cartIncreaseItem = (id) => {
		dispatch(increaseProductQty(id));
	}

	const cartDecreaseItem = (id) => {
		dispatch(decreaseProductQty(id));
	}


	return(
			<>
				<article className="cart-item">
	              <img src={image} className="cart-item-img" alt="product" />
	              <div className="cart-item-info">
	                <h5 className="cart-item-name">{name}</h5>
	                <span className="cart-item-price">${price}</span>
	                <button className="cart-item-remove-btn" title="Remove" onClick={()=>{removeItemFromCart(id)}}>
		               	<i className="fa fa-trash" aria-hidden="true"></i>
		            </button>
	              </div>
	              <div>
	                <button className="cart-item-increase-btn" onClick={()=>cartIncreaseItem(id)}>
	                  <i className="fas fa-chevron-up" />
	                </button>
	                <span className="cart-item-amount">{qty}</span>
	                <button className={'cart-item-decrease-btn' + ((qty ===1) ? ' disabled' : '' )} onClick={()=>cartDecreaseItem(id)}>
	                  <i className="fas fa-chevron-down" />
	                </button>
	              </div>
	            </article>
			</>
		)
}

export default CartProduct;