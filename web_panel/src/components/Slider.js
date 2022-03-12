import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../images/products/spacejoy.jpg';
import slider2 from '../images/products/michael-warf.jpg';
import slider3 from '../images/products/nathan-fertig.jpg';
import slider4 from '../images/products/toa-heftiba.jpg';


const Slider = () => {
	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1
	  };

	return(
			<>
			    <section className="hero">
			        <div className="hero-container">
			        	<SliderSlick {...settings}>
					      <div>
					        <img src={slider1} />
					      </div>
					      <div>
					        <img src={slider2} />
					      </div>
					      <div>
					        <img src={slider3} />
					      </div>
					      <div>
					        <img src={slider4} />
					      </div>					     
					    </SliderSlick>
			        </div>
			    </section>
			</>
		)
}

export default Slider;