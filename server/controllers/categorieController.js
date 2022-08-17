const Category = require("../models/Categorie");

// Handling Errors
const errorsHandler = err =>{
	let errCatName = "";

	if(err.code === 11000){
		errCatName = "Catégorie déja existe !"	
		return errCatName;
	}
	
	if(err.message.includes('Categorie validation failed')){
		Object.values(err.errors).forEach(({properties})=>{
			errCatName = properties.message;
		});
	}
	return errCatName;
}

// ADD CATEGORY
const add_category = async (req, res)=>{
	try{
		const newCategory = new Category({
			catName: req.body.catName
		});
		await newCategory.save();
		res.status(201).json("Une nouvelle catégorie a été ajoutée");
	}catch(err){
		let errCatName = errorsHandler(err);
		res.status(400).json(errCatName);
	}
}

// DELETE CATEGORY
const delete_category = async (req, res)=>{
	let cat = req.body.catName;
	if(!cat){
		return res.status(400).json("Spécifier une catégorie à supprimer ");
	}
	
	let deletedCat = Category.deleteOne({catName: cat}, (err)=>{
		if(!err){
			res.status(200).json(`${cat} a été supprimée !`);
		}
	});
}

// GET ALL CATEGORIES
const get_categories = async (req, res)=>{
	let categories = await Category.find();
	if(categories.length !== 0){
		res.status(200).json({categories});
	}else{
		res.status(200).json("Liste des catégories est vide !");
	}
}

module.exports = {
	add_category,
	delete_category,
	get_categories
}

