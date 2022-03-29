import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';
import {showCart} from '../redux/actions/cartActions';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';


const PaymentForm = ({history}) => {

  const [submitted, setSubmitted] = useState(false);  
  const [showCardPayment, setShowCardPayment] = useState(false); 
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const cardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        color: "#303238",
        fontSize: "18px"  
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  };

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const { street1, street2, city, state, zip, country } = shippingAddress;
  
  //Redirect to shipping page if address is not filled
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

  let cardElement = null;  

  const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true); 
       if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        

        // use stripe.createToken to get a unique token for the card
        const { error, token } = await stripe.createToken(cardElement);

        if (!error) {
        // Backend is not implemented yet, but once there isn’t any errors,
        // you can pass the token and payment data to the backend to complete
        // the charge
        axios
          .post("checkout/payment", {
             token: token.id,
            currency: "EGP",
            price: 1000, // or 10 pounds (10*100). Stripe charges with the smallest price unit allowed
          })
          .then((resp) => {
            alert("Your payment was successful");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log(error);
      }
    }

    const changePaymentMethod = (e) =>{
      if(e.target.value === 'card'){
        setShowCardPayment(true);
      }else{
        setShowCardPayment(false);
      }
    }


    const handleCardError = (event) => {
        let displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    }

    useEffect(() => {
       dispatch(showCart(false));

       if(showCardPayment){
         cardElement = elements.getElement(CardElement);
         cardElement.addEventListener('change', handleCardError);

         return function cleanupListener() {
              cardElement.removeEventListener('change', handleCardError);
         } 
       }       

    }, [showCardPayment]);

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
                      <div className="alert-danger" id="card-errors">
                      </div>
                      <div className="input-group mt-3">
                          <select className="form-control form-control-lg" id="paymentType" onChange={changePaymentMethod}>
                            <option value="cod">Cash on Delivery</option>
                            <option value="card">Pay with Card</option>
                          </select>
                      </div>
                      {
                        showCardPayment ? (
                          <div className="input-group mt-3">
                            <div className="card-number">
                            <CardElement options={cardElementOptions}/>
                            </div>  
                          </div>
                        ):(
                        ''
                        )
                      }
                      
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


export default PaymentForm;