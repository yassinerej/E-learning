const Training = require("../models/Formation");
const User = require("../models/User");
const {requireAuth} = require("../middlewares/auth");

// Ajouter Formation
const add_training = async (req, res)=>{ 
	try{ 
		const userId = requireAuth(req, res);
		const user = await User.findById(userId);
		const newTraining = new Training({
			trainingName: req.body.trainingName,
			trainingCategory: req.body.categoryId,
			trainingLanguage: req.body.languagesId,
			formateur: userId
		});
		// This is an array of IDs 
		
		if(user.role.toLowerCase() === "formateur"){ 
			const savedTraining = await newTraining.save();
			await user.updateOne({$push: {offeredTrainings: savedTraining._id.valueOf()}});
			res.status(201).json("Une nouvelle formation a été ajoutée");
		}else{ 
			res.status(403).json("Vous n'avez pas le droit de creer des formations");
		}
	} catch(err){ 
		res.status(500).json(err);	
	}
}

// Update Formation
const update_training = async (req, res)=>{ 
	try{
		const training = await Training.findById(req.params.id);
		const userId = requireAuth(req, res);			
		if(userId === training.formateur){ 
			await training.updateOne({$set: req.body});
			res.status(200).json("Formation a été modifiée");
		}else{ 
			res.status(403).json("Tu peux modifier seulement vos formations!");
		}
	}catch(err){ 
		res.status(500).json(err);
	}	
}

// Supprimer Formation
const delete_training = async (req, res)=>{ 
	try{ 
		const training = await Training.findById(req.params.id);
		const userId = requireAuth(req, res);
		const user = await User.findById(userId); 
		if(userId === training.formateur || user.role.toLowerCase() === "admin"){ 
			await training.deleteOne();
			res.status(200).json("Formation a été supprimée")
		}else{ 
			res.status(403).json("Seulement les administrateurs et le propriétaire ont le droit de supprimer la formation!");
		}
	} catch(err){ 
		res.status(500).json(err);
	}	
}

// Détails d'une Formation
const get_training = async (req, res)=>{ 
	try{ 
		const training = await Training.findById(req.params.id);
		res.status(200).json(training);
	}catch(err){ 
		res.status(500).json(err);
	}	
}

// Afficher tout les formations
const get_all_training = async (req, res)=>{ 
	try{ 
		const trainingList = await Training.find({});
		res.status(200).json(trainingList);
	} catch(err){ 
		res.status(500).json();
	}
}

// Recherhe d'une formation par nom
const find_training = async (req, res)=>{ 
	try{
		let trainingName = req.query.name; 
		console.log(trainingName)
		let trainingList = await Training.find({trainingName: {$regex: trainingName, $options: 'i'}});
		res.status(200).json(trainingList);
	} catch(err){ 
		res.status(500).json();
	}
}

// Recherhe d'une formation par nom
const get_training_by_category = async (req, res)=>{ 
	try{
		let categoryId = req.query.category;
		let trainingList = await Training.find({trainingCategory: categoryId});
		res.status(200).json(trainingList);
	} catch(err){ 
		res.status(500).json();
	} 
}

module.exports = { 
	add_training,
	update_training,
	delete_training, 
	get_training,
	get_all_training,
	find_training,
	get_training_by_category
}
