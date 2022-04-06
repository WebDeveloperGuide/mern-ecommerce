const express = require('express');
const router = express.Router();
const Order = require("../models/Order");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//Create Order
router.post("/",verifyTokenAndAuthorization, async (req,res)=>{
	const newOrder = new Order(req.body);

	try{
		const savedOrder = await newOrder.save();
		res.status(200).json({status:1,message:"Order submitted successfully",data:savedOrder})

	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});

// Update Order
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{
	
	try{
		const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
			$set:req.body
		},{new:true});
		
		if(updatedOrder == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Order updated successfully",data:[updatedOrder]})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});


//Get All Orders
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
	
	try{
		const orderData = await Order.find();
		
		if(orderData){
			res.status(200).json({success:1,message:"",data:orderData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//Get User Orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (req,res)=>{
	
	try{
		const orderData = await Order.find({ userId: req.params.userId });
		
		if(orderData){
			res.status(200).json({success:1,message:"",data:[orderData]});
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
		const deletedOrder = await Order.findByIdAndDelete(req.params.id);
		
		if(deletedOrder == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"Order deleted successfully"});
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
});

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    
    res.status(200).json({success:1,message:"",data:[income]});
    
  } catch (err) {
    res.status(500).json({status:0,message:err.message})
  }
});

module.exports = router;