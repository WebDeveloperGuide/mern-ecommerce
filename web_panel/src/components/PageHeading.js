import React from 'react';

const PageHeading = ({title}) => {
	return(
			<>
			    <section className="page-hero">
			        <div className="section-center">
			          <h3 className="page-hero-title">{title}</h3>
			        </div>
			      </section>
			</>
		)
}

export default PageHeading;