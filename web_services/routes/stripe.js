const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  try{
    const { currency, price } = req.body;    

    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: 'usd',
      payment_method_types: ['card'],
    });    

    res.status(200).json({status:1,message:"Payment processed successfully"})
  
  }catch(err){
    res.status(500).json({status:0,message:err.message})
  }
});


module.exports = router;