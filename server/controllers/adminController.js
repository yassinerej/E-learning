const User = require("../models/User");
const Formation = require("../models/Formation");
const jwt = require("jsonwebtoken");
const {requireAuth} = require("../middlewares/auth");

//ADMIN CHART STATS 
const stats_charts= async (req, res)=>{
	let results={};
	 User.count({}, async function(err, count) {	
		results.totalUsers=count;
		 Formation.count({}, async function(err, count) {
			results.totalTrainigs=count;
			  User.count({role:'candidat'}, async function(err, count) {
				results.candidat=count;	
				User.count({createdAt:{$gte:'2022-01-01'}}, async function(err, count) {
					results.newUsers=count;	
				  Formation.count({candidats:[]}, async function(err, count) {
					console.log("count trainings worked");
					 results.emptyTrainings=count;
					 console.log("result", results);
					 res.json(results);
				  });	 
			   });	
		    });	 
		});		 
	});	
} 

// PROFILE DATA
const get_profile_admin=async(req,res)=> {
	try{		
			const user = await User.findById('6259549659f9e7c4f059cebd');
			res.json(user);
            console.log('admin sent',user);		
	}catch(err){ 
		res.json("Can't find user");
	}
 	}

//UPDATING USER DATA 
const update_admin = async (req, res)=>{
	const {lastName,firstName,email,phone,country,birthPlace}=req.body;
	console.log(lastName);
	const user= await User.findByIdAndUpdate({_id:"6259549659f9e7c4f059cebd"},{
		lastName:lastName,
		firstName:firstName,
		email:email,
		tel:phone,
		country:country,
		birthPlace:birthPlace
	});
		console.log("admin data changed successfully ");
}
// const notify_admin = async (req, res)=>{
// 	const {id}=req.body;
// 	console.log(lastName);
// 	const user= await User.findByIdAndUpdate({_id:id},{
// 		notification:
// 	});
// 		console.log("admin data changed successfully ");
// }


//ADMIN DELETING USERS
const delete_user= async (req, res)=>{
	const {id}= req.body;
	await User.deleteOne({_id:id});
	console.log("user: ",id," deleted");
}

//ADMIN USER'S TABLE
const admin_user_table=async(req,res)=> {
	console.log("fnt worked");
 	User.find({}, function(err, users) {
		var userMap = {};
	console.log("find worked");
		users.forEach(function(user) {
		  userMap[user._id] = user;
		  console.log(userMap);
		});
	
		res.send(userMap);  
	  });
 	}

//ADMIN DELETING Formation
const delete_Formation= async (req, res)=>{
	const {id}= req.body;
	await Formation.deleteOne({_id:id});
	console.log("Formation: ",id," deleted");
}

//ADMIN TRAINING'S TABLE
const admin_formation_table=async(req,res)=> {
	console.log("admin_formation_table worked");

 	Formation.find({}, function(err, formations) {
		var formationMap = {};
		formations.forEach(function(formation) {
		  formationMap[formation._id] = formation;
		  console.log(formationMap);
		});
	
		res.send(formationMap);  
	  });
 	}

     module.exports = {
        admin_user_table,
        stats_charts,
        delete_user,
        delete_Formation,
        admin_formation_table,
        get_profile_admin,
		update_admin
    };