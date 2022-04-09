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
		
		const itemPerPage = parseInt(req.query.limit || "10"); //Products per page
  		const pageNum = parseInt(req.query.page || "0"); //Products page number
  		const sortByVal = (req.query.sortBy || "_id"); //Products sort by
		const searchText = (req.query.searchText || ""); //Products search text
		const priceFilter = (req.query.price || ""); //Products search text

  		
  		let sortObject = {};
  		let filterObj = {};
  		let searchTextObj = {};
  		let priceObject = {};
  		sortByField = sortByVal;
  		if(sortByVal == 'name'){
  			sortByField = 'title'; 
  		}

  		if(searchText !== ''){
  				searchTextObj = {
							       $or : [
							          { title: { $regex: searchText, $options:'i' } },
	  								  { description: { $regex: searchText, $options:'i' } }
							       ]
							    };

  		}

  		if(priceFilter !== ''){
  			priceObject = 	{price: {$lte: priceFilter}};
  		}


	    filterObj = {
					 $and : [							    
					    searchTextObj,
					    priceObject
					 ]
				   };


  		sortObject[sortByField] = 1;  		
  		
  		
  		const totalProducts = await Product.countDocuments(filterObj);
		const productData = await Product.find(filterObj).sort(sortObject).limit(itemPerPage).skip(itemPerPage * pageNum);
		

		let numOfPages = parseInt(totalProducts/itemPerPage);

		if(productData){
			res.status(200).json({success:1,message:"", numOfPages ,data:productData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//Get All Products
router.get("/all", async (req,res)=>{
	try{
  		const totalProducts = await Product.countDocuments({});
		const productData = await Product.find({}).sort({_id: 1});

		if(productData){
			res.status(200).json({success:1,message:"", data:productData});
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