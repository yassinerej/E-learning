import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo.png"

export default function SignComponent() {
    let errorsObject = {};
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const history = useHistory();
    const getFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const getLastName = (e) => {
        setLastName(e.target.value);
    }

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = async (e) => {
        await axios.post("http://localhost:5000/signup", {
            lastName,
            firstName,
            email,
            password
        })
            .then(res => { toast.success(res.data); history.push("/login") })
            .catch(err => errorsObject = err.response.data);
        setErrors(errorsObject);
    }

    return (

		<div className="flex justify-center mt-10">
			<div></div>
			<div className="basis-2/6 shadow-2xl rounded-lg">
				<form className="px-28 pt-10 mb-8" action="/login">
					<h1 className="text-center text-4xl font-semibold text-gray-600">Inscription</h1>
					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Prénom </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="text" placeholder="John" autoFocus onChange={getFirstName} required />
						<span className="text-red-500">{errors.firstName}</span>
					</div>
					
					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Nom </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="password" placeholder="Doe" onChange={getLastName} required/>
						<span className="text-red-500">{errors.lastName}</span>
					</div>
					
					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Email </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="email" placeholder="john-doe@email.com" onChange={getEmail} required/>
						<span className="text-red-500">{errors.email}</span>
					</div>

					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Mot de passe </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="password" placeholder="*******" onChange={getPassword} required/>
						<span className="text-red-500">{errors.password}</span>
					</div>

					<div class="flex justify-center space-x-10">
						<div class="form-check form-check-inline">
							<input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
							<label class="form-check-label inline-block text-gray-600" for="inlineRadio10">Candidat</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
							<label class="form-check-label inline-block text-gray-600" for="inlineRadio20">Formateur</label>
						</div>
					</div>
					
					<div className="pt-2 mt-2">
						<button className="bg-red-500 text-white w-96 h-10 rounded-lg" onClick={handleSubmit}> Créer Compte </button>
					</div>
				</form>
				<div class="flex items-center justify-center gap-4 mx-28 mb-8">
					<button class="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
						<img src="https://img.icons8.com/color/30/000000/facebook-new.png"/>
					</button>
					<button class="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
						<img src="https://img.icons8.com/color/30/000000/google-logo.png"/>
					</button>
				</div>
			</div>
			<div></div>
		</div>
	);
} 
