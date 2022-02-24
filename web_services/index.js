const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

// Read value from .env file
dotenv.config();

//MongoDB Connection
mongoose.connect(process.env.DB_URL_DEVELOPMENT)
.then(()=>{
	console.log("DB Connection Successfully")
}).catch((err)=>{
	console.log(err)
})

//Allow to call from different source
app.use(cors());
// parse requests of content-type - application/json, Read JSON data from request
app.use(express.json());

//Use routes
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);


//Read PORT from .env file OR Default set 5002
const API_PORT = process.env.API_PORT || 5002;

app.listen(API_PORT,()=>{
	console.log(`Backend Server is running on port ${API_PORT}`)
})
