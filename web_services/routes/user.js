const express = require('express');
const router = express.Router();
const User = require("../models/User");
const {verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
const CryptoJS = require("crypto-js");

//Get All Users
router.get("/",verifyTokenAndAdmin,async (req,res)=>{
	
	try{
		const userData = await User.find();
		
		if(userData){
			res.status(200).json({success:1,message:"",data:userData});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//Get Single User
router.get("/find/:id",verifyTokenAndAdmin,async (req,res)=>{
	
	try{
		const userData = await User.findById(req.params.id);
		
		if(userData){
			const {password,...others} = userData._doc;
			res.status(200).json({success:1,message:"",data:[{...others}]});
		}else{
			res.status(200).json({success:0,message:"No Data Found!"})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

// Update User
router.put("/:id",verifyTokenAndAuthorization,async (req,res)=>{
	if(req.body.password){
		req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
	}
	
	try{
		const updatedUser = await User.findByIdAndUpdate(req.params.id,{
			$set:req.body
		},{new:true});
		
		if(updatedUser == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"User updated successfully",data:[updatedUser]})
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

// Delete User
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
	
	try{
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		
		if(deletedUser == null){
			res.status(200).json({success:0,message:"No Data Found!"});
		}else{
			res.status(200).json({success:1,message:"User deleted successfully"});
		}
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    
    res.status(200).json({success:0,message:"",data:data});
  } catch (err) {
    res.status(500).json({status:0,message:err.message})
  }
});

module.exports = router;