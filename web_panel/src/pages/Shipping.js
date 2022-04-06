import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';
import {showCart, saveShippingAddress} from '../redux/actions/cartActions';

const ShippingPage = ({history}) => {

  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const { street1, street2, city, state, zip, country } = shippingAddress;

  const cartItems = useSelector((state)=> state.cart.cartItems);
  
  //Redirect to home page if no items in cart
  if (Object.keys(cartItems).length === 0) {
    history.push("/");
  }

  const [formState,setFormState] = useState({
        values:shippingAddress       
    });

  const handleChange = (event) => {
        setFormState(formState =>({
          ...formState,
          values:{
            ...formState.values,
            [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
          }
          
        }));
      }

  const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); 
        const { customer_name, street1,street2, city, state, zip, country } = formState.values;
        
        if (customer_name && street1 && city && state && zip && country) {
            dispatch(saveShippingAddress(formState.values));
            history.push("/payment");
        }
    }

    useEffect(() => {
       dispatch(showCart(false))    
    }, []);

	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Shipping"/>
		 	<section className="section section-center">
		        <div className="container h-100">
			        <div className="d-flex justify-content-center h-100">
			          <div className="user_card content-card shipping-page-content">   
                  <h4 className="content-heading">Delivery Address</h4>       
			            <div className="d-flex justify-content-center form_container auth-page-container shipping-page-container">
			              <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="input-group">
                        <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.customer_name ? ' is-invalid' : '')} 
                                    name="customer_name" 
                                    placeholder="Customer Name"
                                    onChange={handleChange}
                                    value={formState.values.customer_name || ''}
                                    />                        
                      </div>
                      {submitted && !formState.values.customer_name &&
                          <div className="inline-errormsg">Name is required</div>
                      }
			                <div className="input-group mt-3">
			                  <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.street1 ? ' is-invalid' : '')} 
                                    name="street1" 
                                    placeholder="Street 1"
                                    onChange={handleChange}
                                    value={formState.values.street1 || ''}
                                    />
                        <div className={'input-group-append' + (submitted && !formState.values.street1 ? ' is-invalid' : '')}>
                          <span className="input-group-text"><i className="fas fa-map-marker-alt" /></span>
                        </div>
			                </div>
			                {submitted && !formState.values.street1 &&
                                <div className="inline-errormsg">Street is required</div>
                            }
                      <div className="input-group mt-3">
                        <input type="text" className="form-control form-control-lg"
                                    name="street2" 
                                    placeholder="Street 2"
                                    onChange={handleChange}
                                    value={formState.values.street2 || ''}
                                    />
                      </div>                      
                      <div className="input-group mt-3">
                        <div className="input-group-address mr-2">
                            <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.city ? ' is-invalid' : '')} 
                                    name="city" 
                                    placeholder="City"
                                    onChange={handleChange}
                                    value={formState.values.city || ''}
                                    />
                                    {submitted && !formState.values.city &&
                                <div className="inline-errormsg">City is required</div>
                            }
                        </div>
                        <div className="input-group-address mr-2">
                          <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.state ? ' is-invalid' : '')} 
                                    name="state" 
                                    placeholder="State"
                                    onChange={handleChange}
                                    value={formState.values.state || ''}
                                    />
                                    {submitted && !formState.values.state &&
                                        <div className="inline-errormsg">State is required</div>
                                    }  
                        </div>

                        <div className="input-group-address">
                            <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.zip ? ' is-invalid' : '')} 
                                    name="zip" 
                                    placeholder="Zip"
                                    onChange={handleChange}
                                    value={formState.values.zip || ''}
                                    />
                                    {submitted && !formState.values.zip &&
                                        <div className="inline-errormsg">Zip is required</div>
                                    }
                        </div>
                      </div>
                      <div className="input-group mt-3">
                        <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.country ? ' is-invalid' : '')} 
                                    name="country" 
                                    placeholder="Country"
                                    onChange={handleChange}
                                    value={formState.values.country || ''}
                                    />                                    
                      </div>
                      {submitted && !formState.values.country &&
                          <div className="inline-errormsg">Country is required</div>
                      }
			                <div className="d-flex justify-content-center mt-3 login_container">
			                  <button className="btn login_btn">
                        {submitted ? (
                            <i className="fas fa-spinner fa-spin"></i>
                          ): (
                            "Continue"
                          )
                        }
                        </button>
			                </div>
			              </form>
			            </div>			            
			          </div>
			        </div>
			      </div>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ShippingPage;