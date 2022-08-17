import React, {useState, useHistory} from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import ForgetPass from "./ForgetPass";
import { ToastContainer } from "react-toastify";
import logo from "../../assets/logo.png"

export default function LoginComponent() {
	
	let errorsObject = {};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({email: "", password: ""});

	const getEmail = (e)=>{
		setEmail(e.target.value);
	}

	const getPassword = (e)=>{
		setPassword(e.target.value);
	}

	const handleSubmit = async (e)=>{
		e.preventDefault();
		await axios.post("http://localhost:5000/login", {
			email,
			password
		})
			.then(res => console.log(res.data) )
			.catch(err => errorsObject = err.response.data);
			setErrors(errorsObject);
			console.log(errors)
	} 
	
	return (
		<div className="flex justify-center mt-10">
			<div></div>
			<div className="basis-2/6 shadow-2xl rounded-lg">
				<form className="px-28 pt-10 mb-8">
					<h1 className="text-center text-4xl font-semibold text-gray-600">Connexion</h1>
					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Email </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="email" placeholder="john-doe@email.com" autoFocus onChange={getEmail} required />
						<span className="text-red-500">{errors.email}</span>
					</div>
					
					<div className="pb-6 text-gray-600">
						<div className="font-medium"> Mot de passe </div>
						<input className="border-2 w-96 h-10 rounded-lg px-2" type="password" placeholder="*******" onChange={getPassword} required/>
						<span className="text-red-500">{errors.password}</span>
					</div>
					
					<div>
						<ForgetPass />
					</div>
					
					<div className="pt-2">
						<button className="bg-red-500 text-white w-96 h-10 rounded-lg" onClick={handleSubmit}> Connecter </button>
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
