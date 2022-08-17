const {sign} = require("jsonwebtoken");

// Create Access Token
const createAccessToken = id => {
	return sign({id}, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "30m"
		}
	);
}

// Create Refresh Token
const createRefreshToken = id => { 
	return sign({id}, process.env.REFRESH_TOKEN_SECRET, { 
			expiresIn: "1y"
		}
	);	
}

// Send Access Token
const sendAccessToken = (req, res, accessToken) =>{ 
	res.status(200).json({ 
		accessToken, 
		email: req.body.email,
		msg: "You are logged in"
	});
}

// Send Refresh Token
const sendRefreshToken = (res, refreshToken) =>{
	res.cookie('refreshToken', refreshToken, {
			 // httpOnly: true,
			 // path: '/refresh_token'
		 }
	);
}

module.exports = { 
	createAccessToken,
	createRefreshToken,
	sendAccessToken, 
	sendRefreshToken
}
