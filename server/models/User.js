const mongoose = require('mongoose');
const { isEmail, isStrongPassword } = require('validator');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Nom est requis !']
    },
    lastName: {
        type: String,
        required: [true, 'Prenom est requis !']
    },
    email: {
        type: String,
        required: [true, 'Email est requis !'],
        unique: true, 
		validate: [isEmail, 'Email invalide !']  
    },
    password: {
        type: String,
        required: [true, 'Mot de passe est requis !'],
		validate: [isStrongPassword, 'Le mot de passe doit contenir au minimum 8 caractères(A-Z, a-z, 0-9, _)']
	},
	role: {
		type: String,
		default: "candidat" // 3Roles: candidat, formateur, admin
	},
    tel: {
        type: String,
        required: false
    },
    birthDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    birthPlace: {
        type: String,
        required: false
    },
    studyLevel: {
        type: String,
        required: false
    },
    job: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    socialNetwork: {
        type: Array,
        required: false
    },
    profilePicture: {
        type: String,
        required: false,
        default: ""
    },
	enrolledTrainings: { 
		type: Array	
	},
	offeredTrainings: { 
		type: Array
	}
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw new Error('Mot de passe invalide');
    }
    throw Error('Email invalide');
}

const User = mongoose.model("User", userSchema);
module.exports = User;
