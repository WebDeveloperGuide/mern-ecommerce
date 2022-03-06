const express = require('express');
const router = express.Router();
const Product = require("../models/Product");
const {verifyTokenAndAdmin} = require("./verifyToken");

//Create Product
router.post("/",verifyTokenAndAdmin, async (req,res)=>{
	const newProduct = new Product(req.body);

	try{
		const savedProduct = await newProduct.save();
		res.status(200).json({status:1,message:"Product added successfully",data:[savedProduct]})

	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});

// Update Product
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{
	
	try{
		const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
			$set:req.body
		},{new:true});
		
		if(updatedProduct == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Product updated successfully",data:[updatedProduct]})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});


//Get All Products
router.get("/", async (req,res)=>{
	
	try{
		const productData = await Product.find();
		
		if(productData){
			res.status(200).json({success:1,message:"",data:productData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//Get Single Product
router.get("/find/:id", async (req,res)=>{
	
	try{
		const productData = await Product.findById(req.params.id);
		
		if(productData){
			res.status(200).json({success:1,message:"",data:productData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})


// Delete Product
router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{

	try{
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);
	
		if(deletedProduct == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Product deleted successfully"});
		}		
		
	}catch(err){
		
		res.status(500).json({status:0,message:err.message})
	}
});

module.exports = router;