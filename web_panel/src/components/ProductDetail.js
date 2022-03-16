import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/cartActions';

const Products = (props) => {
	const {id,thumbnail,title,price,description} = props.details;
	const [itemQty, setItemQty] = useState(1);
	const dispatch = useDispatch();
	const addToCartHandle = (product) => {
		dispatch(addToCart(product,itemQty));
	}

	const handleItemQty = (e) =>{
		setItemQty(e.target.value)
	}
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
			              <p className="item-qty">
			              	<select onChange={handleItemQty} defaultValue={itemQty}>
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							    <option value="5">5</option>
							    <option value="6">6</option>
							    <option value="7">7</option>
							    <option value="8">8</option>
							    <option value="9">9</option>
							    <option value="10">10</option>
							</select>
			              </p>
			              <button className="addToCartBtn btn" data-id="id" onClick={() => addToCartHandle(props.details)}>add to cart</button>
			            </div>
			          </article>
			        </div>
			      </section>
			</>
		)
}

export default Products;