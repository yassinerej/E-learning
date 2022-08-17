import axios from "axios";
import {useState, useEffect} from "react";
import Categorie from "./Categorie";

const Categories = () => { 
	const [categoryList, setCategoryList] = useState([]);
	
	const loadCategories = () => { 
		axios.get('http://localhost:5000/categories')
			.then(res =>
				setCategoryList(res.data)
			)
	}

	useEffect(loadCategories, []);
	console.log(categoryList);
	return ( 
		<div className="mx-3 my-4 ">
			{
				categoryList.categories && categoryList.categories.map(category => 
					<Categorie data={category} key={category._id}/>	 
				)
			}
		</div>
	);
}

export default Categories;
