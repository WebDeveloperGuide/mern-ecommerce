const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
	const authHeader = req.headers.authorization;
	
	if(authHeader){
		const token = authHeader.split(" ")[1];
		jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
			if(err){
				res.status(403).json({status:0,message:"Invalid Token"});				
			}else{
				req.user = user;
				next();
			}
		})

	}else{
		return res.status(401).json({status:0,message:"You are not authenticated!"});
	}
}

const verifyTokenAndAuthorization = (req,res,next) =>{
	verifyToken(req,res,()=>{
		if(req.user_id === req.param.id || req.user.isAdmin){
			next();
		}else{
			res.status(403).json({status:0,message:"You have not access"})
		}
	})
}

const verifyTokenAndAdmin = (req,res,next) =>{
	verifyToken(req,res,()=>{
		if(req.user.isAdmin){
			next();
		}else{
			res.status(403).json({status:0,message:"You have not access"})
		}
	})
}

module.exports = {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};