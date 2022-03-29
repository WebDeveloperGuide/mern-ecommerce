import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const PaymentPage = () => {

  return(
      <Elements stripe={stripePromise}>
        <PaymentForm /> 
      </Elements>
    )
}


export default PaymentPage;