import React from 'react';
import {Link} from 'react-router-dom';

const Products = (props) => {
	
	const {id,thumbnail,price,title} = props.detail;
	return(
			<>
			    <article className="product">
			        <div className="product-container">
			          <img src={thumbnail} className="product-img img" alt={title} />
			          <div className="product-icons">
			            <Link to={`/product/${id}`} className="product-icon">
			              <i className="fas fa-search" />
			            </Link>
			            <button className="product-cart-btn product-icon" data-id={id}>
			              <i className="fas fa-shopping-cart" />
			            </button>
			          </div>
			        </div>
			        <footer>
			          <h5 className="product-name">{title}</h5>
			          <span className="product-price">${price}</span>
			        </footer>
			      </article>
			</>
		)
}

export default Products;