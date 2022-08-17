const jwt = require("jsonwebtoken");

const requireAuth = (req, res)=>{
	const authorization = req.headers['authorization'];
	if(!authorization){ 
		res.json("You need to login");
	}
	let userId;
	const token = authorization.split(' ')[1];
	// Check & verify the token 
	if(token){
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken)=>{
			if(err){
				// res.redirect('/auth/login');
				res.json("You need to login");
			}else{
				userId = decodedToken.id;
			}
		});
	}else{
		// res.redirect('/auth/login');
		return res.json("You need to login");
	}
	return userId;
}

module.exports = {
	requireAuth
}
