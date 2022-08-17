const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {requireAuth} = require("../middlewares/auth");

// GET USER PROFILE
const get_profile = async (req, res) => {
	try{
		const userId = requireAuth(req, res);
		if(userId !== undefined){ 
			const user = await User.findById(userId);
			res.json(user);
		}
	}catch(err){ 
		res.json("Can't find user");
	}
}

// UPDATE USER PROFILE
const put_profile = async (req, res) => {
	try{
		const userId = requireAuth(req, res);
		if(userId !== undefined){ 
			const user = await User.findByIdAndUpdate(userId, {$set: req.body});
			res.status(200).json("Account has been updated!");
		}
	}catch(err){ 
		res.json("Can't find user");
	}
}

// DELETE USER PROFILE
const delete_profile = async (req, res) => {
	try{
		const userId = requireAuth(req, res);
		if(userId !== undefined){ 
			const user = await User.findByIdAndDelete(userId);
			res.status(200).json("Account has been Deleted!");
		}
	}catch(err){ 
		res.json("Can't find user");
	}
}

module.exports = {
	get_profile,
	put_profile,
	delete_profile
};
