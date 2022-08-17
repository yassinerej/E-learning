import axios from "axios";
import {useState, useEffect} from "react";
import Carousel, { consts } from "react-elastic-carousel";
import FormationCard from './FormationCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Categorie = ({data}) => {
	function myArrow({ type, onClick, isEdge }) {
		const pointer = type === consts.PREV ?
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-9 h-9"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"/></svg>
			: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-9 h-9"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"/></svg>;

		return (
			<button onClick={onClick} disabled={isEdge}> {pointer} </button>
		);
    }

	const [trainingList, setTrainingList] = useState([]);

	const loadTrainings = () =>{
		axios.get("http://localhost:5000/formation-par-categorie",{params: {category: data._id }})
			.then(res =>  
				setTrainingList(res.data)
			)
	}

	useEffect(loadTrainings, []);
	console.log(trainingList);
	return ( 
			<div className="border-2 my-3 p-4 rounded-lg">
				<h1 className="font-bold text-3xl mb-2 text-gray-900">
					{data.catName}
				</h1>
				<Carousel breakPoints={breakPoints} itemPadding={[10, 10]} renderArrow={myArrow} className="space-x-9" renderPagination={({ pages, activePage, onClick }) => {return <></>}}>
					{
						trainingList.length != 0 && trainingList.map(training => 
							<FormationCard key={training._id} data={training}/>
						)
					}

				</Carousel>
			</div>
	);
} 

export default Categorie;
