import React from 'react';

const Filters = () => {
	return(
			<>
			    <div className="filters">
			        <div className="filters-container">
			          {/* search */}
			          <form className="input-form">
			            <input type="text" className="search-input" placeholder="search..." />
			          </form>
			          {/* categories */}
			          <h5>Company</h5>
			          <article className="companies">
			            <button className="company-btn">all</button>
			            <button className="company-btn">ikea</button>
			            <button className="company-btn">marcos</button>
			          </article>
			          {/* price */}
			          <h5>Price</h5>
			          <form className="price-form">
			            <input type="range" className="price-filter" min={0} defaultValue={50} max={100} />
			          </form>
			          <span className="price-value">Value : $80</span>
			        </div>
			      </div>
			</>
		)
}

export default Filters;