const express = require('express');
const router = express.Router();
const Cart = require("../models/Cart");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//Create Cart
router.post("/",verifyToken, async (req,res)=>{
	const newCart = new Cart(req.body);

	try{
		const savedCart = await newCart.save();
		res.status(200).json({status:1,message:"Cart added successfully",data:[savedCart]})

	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});

// Update Product
router.put("/:id",verifyTokenAndAuthorization,async (req,res)=>{
	
	try{
		const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
			$set:req.body
		},{new:true});
		
		if(updatedCart == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Cart updated successfully",data:[updatedCart]})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});


//Get All Products
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
	
	try{
		const cartData = await Cart.find();
		
		if(cartData){
			res.status(200).json({success:1,message:"",data:cartData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//Get User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req,res)=>{
	
	try{
		const cartData = await Cart.findOne({ userId: req.params.userId });
		
		if(cartData){
			res.status(200).json({success:1,message:"",data:[cartData]});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})


// Delete Product
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
	
	try{
		const deletedCart = await Cart.findByIdAndDelete(req.params.id);
		
		if(deletedCart == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Cart deleted successfully"});
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});

module.exports = router;