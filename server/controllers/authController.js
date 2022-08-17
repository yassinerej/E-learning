const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { 
	createAccessToken, 
	createRefreshToken,
	sendAccessToken, 
	sendRefreshToken
} = require("../middlewares/tokens");
const {requireAuth} = require("../middlewares/auth");

// Handle Errors
const errorsHandler = err =>{
	let errors = {email: "", password: ""};
	
	// Email n'existe pas 
	if(err.message === 'Email invalide'){
		errors.email = 'Email n\'existe pas';
	}

	if(err.message === 'Mot de passe invalide'){
		errors.password = 'Mot de passe invalide';
	}

	if(err.code === 11000){
		errors.email = "Email est déjà utilisée";
		return errors;
	}

	if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
	
	return errors;
}

// Handle Empty Fields
const handleEmptyFields = (email, password)=>{
	let errors = {email: "", password:""};
	if(!email){
		errors.email = "Email est requis !";
	}
	
	if(!password){
		errors.password = "Mot de passe est requis !";
	}
	return errors;
}

// Sign up User
const signup_user = async (req, res)=>{
	try{
        const newUser = new User({
			firstName: req.body.lastName,
            lastName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
			role: req.body.role
        });
        const user = await newUser.save();
        res.status(201).json("Un nouvel utilisateur a été créé");
	}catch(err){
		let errors = errorsHandler(err);
		res.status(400).json(errors);
	}
};

// Login User
const login_user = async (req, res)=>{
	const {email, password} = req.body;
	let errors = {}
	if(email && password){ 
	try {
        const user = await User.login(email, password);
		const userId = user._id;
		const accessToken = createAccessToken(userId);
		const refreshToken = createRefreshToken(userId);
		sendRefreshToken(res, refreshToken);
		sendAccessToken(req, res, accessToken);
	} catch (err) {
		errors = errorsHandler(err);
        res.status(400).json(errors);
    }}else{
		errors = handleEmptyFields(email, password);
		res.status(400).json(errors);
	}
};

//LOGIN ADMIN 
const login_admin = async (req, res)=>{
	const {email, password} = req.body;
	let errors = {}
	if(email && password){ 
	try {
        const user = await User.login(email, password);
		const userId = user._id;
		console.log(user.role);
		const accessToken = createAccessToken(userId);
		const refreshToken = createRefreshToken(userId);
		sendRefreshToken(res, refreshToken);
		sendAccessToken(req, res, accessToken);
	} catch (err) {
		errors = errorsHandler(err);
        res.status(400).json(errors);
    }}else{
		errors = handleEmptyFields(email, password);
		res.status(400).json(errors);
	}
};


// LOGOUT USER
const logout_user = (req, res)=>{
	res.clearCookie('refreshToken', { 
		// path: '/refresh_token'
	});
	return res.send({'msg': 'Log out'});
}

const get_profile = async (req, res)=>{
	const userId = requireAuth(req, res);	
	res.json("You are logged in")	
}

module.exports = {
	signup_user, 	
	login_user,
	logout_user,
	login_admin
}
