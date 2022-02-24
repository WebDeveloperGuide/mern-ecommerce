const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
		{
			title:{type:String, required:true},
			description:{type:String, required:true},
			image:{type:String, required:true},
			categories:{type:Array},
			size:{type:String},
			color:{type:String},
			price:{type:String},
		},
		{timestamps:true}	
	);

module.exports = mongoose.model("Product",ProductSchema);