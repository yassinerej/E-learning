const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({ 
	trainingName: { 
		type: String,
	},
	trainingCategory: { 
		type: String
	}, 
	trainingLanguage: { 
		type: Array
	},
	courses:{ 
		type: Array
	},
	formateur: {
		type: String
	},
	candidats:{ 
		type: Array
	}
},
{ 
	timestamps: true
});

const Training = mongoose.model("Training", trainingSchema);
module.exports = Training;
