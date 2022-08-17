const FormationCard = ({data}) =>{ 
	return ( 
	
<div class="max-w-sm bg-white rounded-lg border-2 hover:shadow-2xl">
    <img class="p-8 rounded-t-lg h-60" src="https://www.cgdirector.com/wp-content/uploads/media/2021/02/Adobe-Photoshop-System-Requirements-Twitter-1200-x-675-768x432.jpg" alt="product image" />
    <div class="px-5 pb-5 leading-loose">
        <a href="#">
            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 hover:underline">{data.trainingName}</h5>
        </a>
		<div className="text-gray-600 font-bold"> 
			<img src="https://img.icons8.com/cotton/20/000000/teacher.png" className="inline-block"/> 
				Alaa Yousfi 
		</div> 
		<span className="text-gray-600 font-normal">
			<img src="https://img.icons8.com/external-flaticons-lineal-flat-icons/20/000000/external-student-back-to-school-flaticons-lineal-flat-icons-3.png" className="inline-block"/>
			(3215)
		</span>
        <div class="flex justify-between items-center">
            <span className="text-gray-600">
				<img src="https://img.icons8.com/carbon-copy/30/000000/language.png" className="inline-block"/>
				FR/EN
			</span>
            <a href="#" class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Suivre</a>
        </div>
    </div>
</div>

	);
}

export default FormationCard;

