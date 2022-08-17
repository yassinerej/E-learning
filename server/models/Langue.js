const mongoose = require("mongoose");

const langueSchema = new mongoose.Schema({
	langName: {
		type: String,
		unique: true,
		required: [true, "Nom de la langue est requis !"]
	}	
});

const Langue = mongoose.model("Langue", langueSchema);
module.exports = Langue;
