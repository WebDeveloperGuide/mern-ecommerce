import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';
import {showCart, saveShippingAddress} from '../redux/actions/cartActions';

const PaymentPage = ({history}) => {

  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const { street1, street2, city, state, zip, country } = shippingAddress;
  
  if (Object.keys(shippingAddress).length === 0) {
    history.push("/shipping");
  }

  const [formState,setFormState] = useState({
        values:{}       
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
        const { name_on_card,card_number, expire, cvc } = formState.values;
        
        if (name_on_card && card_number && expire && cvc) {
            dispatch(saveShippingAddress(formState.values));
            //history.push("/payment");
        }
    }

    useEffect(() => {
       dispatch(showCart(false))    
    }, []);

	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Payment"/>
		 	<section className="section section-center">
		        <div className="container h-100">
			        <div className="d-flex justify-content-center h-100">
			          <div className="user_card content-card payment-page-content">   
                  <h4 className="content-heading">Payment Detail</h4>       
			            <div className="d-flex justify-content-center form_container auth-page-container payment-page-container">
			              <form onSubmit={handleSubmit} autoComplete="off">
			                <div className="input-group">
			                  <div className={'input-group-append' + (submitted && !formState.values.name_on_card ? ' is-invalid' : '')}>
                          <span className="input-group-text"><i className="fas fa-user" /></span>
                        </div>
                        <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.name_on_card ? ' is-invalid' : '')} 
                                    name="name_on_card" 
                                    placeholder="Name on Card"
                                    onChange={handleChange}
                                    value={formState.values.name_on_card || ''}
                                    />
                        
			                </div>
			                {submitted && !formState.values.name_on_card &&
                                <div className="inline-errormsg">Name is required</div>
                            }
                      <div className="input-group mt-3">
                        <div className={'input-group-append' + (submitted && !formState.values.card_number ? ' is-invalid' : '')}>
                          <span className="input-group-text"><i className="fas fa-credit-card" /></span>
                        </div>
                        <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.name_on_card ? ' is-invalid' : '')}
                                    name="card_number" 
                                    placeholder="Card Number"
                                    onChange={handleChange}
                                    value={formState.values.card_number || ''}
                                    />
                      </div>
                      {submitted && !formState.values.card_number &&
                                <div className="inline-errormsg">Card number is required</div>
                            }                    
                      <div className="input-group mt-3">
                        <div className="input-group-address mr-2">
                            <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.expire ? ' is-invalid' : '')} 
                                    name="expire" 
                                    placeholder="MM/YY"
                                    onChange={handleChange}
                                    value={formState.values.expire || ''}
                                    />
                                    {submitted && !formState.values.expire &&
                                        <div className="inline-errormsg">Expire is required</div>
                                    }
                        </div>
                        <div className="input-group-address mr-2">
                          <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.cvc ? ' is-invalid' : '')} 
                                    name="cvc" 
                                    placeholder="CVC"
                                    onChange={handleChange}
                                    value={formState.values.cvc || ''}
                                    />
                                    {submitted && !formState.values.cvc &&
                                        <div className="inline-errormsg">CVC is required</div>
                                    }  
                        </div>
                      </div>                      
			                <div className="d-flex justify-content-center mt-3 login_container">
			                  <button className="btn login_btn">Proceed</button>
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


export default PaymentPage;