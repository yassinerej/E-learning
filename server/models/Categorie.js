const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
	catName: {
		type: String,
		unique: true,
		required: [true, "Nom du catégorie est requis !"]
	}
});

const Categorie = mongoose.model("Categorie", categorieSchema);
module.exports = Categorie;
