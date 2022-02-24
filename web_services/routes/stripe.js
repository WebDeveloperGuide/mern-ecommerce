const express = require("express");
const router = express.Router();
const KEY = process.env.STRIPE_SECRET_KEY
const stripe = require("stripe");
const stripeAccess = stripe(process.env.KEY)

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});


module.exports = router;