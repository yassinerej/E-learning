const Langue = require("../models/Langue");

// HANDLING ERRORS
const errorsHandler = err =>{
	let errLangName = "";

	if(err.code === 11000){
		errLangName = "Langue déja existe !"	
		return errLangName;
	}
	
	if(err.message.includes('Langue validation failed')){
		Object.values(err.errors).forEach(({properties})=>{
			errLangName = properties.message;
		});
	}
	return errLangName;
}

// ADD LANGUAGE
const add_langue = async (req, res)=>{
	try{
		const newLangue = new Langue({
			langName: req.body.langName
		});
		const langue = await newLangue.save();
		res.status(201).json("Une nouvelle langue a été ajoutée");
	}catch(err){
		let errLangName = errorsHandler(err);
		res.status(400).json(errLangName);
	}
}

// DELETE LANGUAGE
const delete_langue = async (req, res)=>{
	let lang = req.body.langName;
	if(!lang){
		return res.status(400).json("Spécifier une langue à supprimer ");
	}
	let deletedLang = Langue.deleteOne({langName: lang}, (err)=>{
		if(!err){
			res.status(200).json(`${lang} a été supprimée !`);
		}
	});
}

// GET ALL LANGUAGES
const get_langues = async (req, res)=>{
	let langues = await Langue.find();
	if(langues.length !== 0){
		res.status(200).json({langues});
	}else{
		res.status(200).json("Liste des langues est vide !");
	}
}

module.exports = {
	add_langue,
	delete_langue,
	get_langues
}

