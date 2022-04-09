import React,{useState} from 'react';

const Filters = (props) => {

	const {priceFilter, changePrice, changeSearch} = props;
	
	return(
			<>
			    <div className="filters">
			        <div className="filters-container">
			          {/* search */}
			          <form className="input-form">
			            <input type="text" className="search-input" placeholder="search..." onChange={changeSearch}/>
			          </form>			          
			          {/* price */}
			          <h5>Price</h5>
			          <form className="price-form">
			            <input type="range" className="price-filter w-100" min={0} defaultValue={priceFilter} max={10000} onChange={changePrice} />
			          </form>
			          <span className="price-value">Value : ${priceFilter}</span>
			        </div>
			      </div>
			</>
		)
}

export default Filters;