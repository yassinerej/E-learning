import axios from "axios";
import {useState, useEffect} from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () =>{ 
	let searchWord = "";
	const [filteredTrainings, setFilteredTrainings] = useState([]);
	
	const loadFilteredTrainings = () => { 
		axios.get("http://localhost:5000/formation-recherche", {params: {name: searchWord}})
			.then(res => setFilteredTrainings(res.data));
	}

	const handleOnChangeInput = (e) => { 
		searchWord = e.target.value;
		console.log(searchWord);
		loadFilteredTrainings()
		console.log(filteredTrainings);
	}


	return (
		<div className="h-16 shadow-lg">
			<nav className="flex justify-between m-3">
				<div className="flex items-center justify-start flex-1">
					<div className="mr-2">FR</div>
					<div className="flex items-center border-2 h-10 rounded-lg">
						<input type="text" placeholder="Chercher Une Formation(par nom)" className="ml-2 outline-none" onKeyUp={handleOnChangeInput}/>
						<img src="https://img.icons8.com/ios-filled/20/000000/search--v1.png" className="mx-2" />
					</div>
			
				</div>
				<div className="flex-2">
					<Link to="/">
						<img src={logo} alt="logo" className="object-cover w-48 h-14"/>
					</Link>
				</div>
				<div className="flex-1 flex justify-end items-center"> 
					<Link to="/login" className="mx-3 text-gray-600 font-semibold py-2 px-4 border-2 rounded" type="button" >
						Connecter
					</Link>
					<Link to="/signup" className="mx-3 bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 rounded" type="button" >
						Inscrire
					</Link>	
				</div>
			</nav>	
		</div>
	);
}

export default Navbar;
