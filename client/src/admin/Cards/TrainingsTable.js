import React, { useState, useEffect,useCallback  } from 'react';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TrainingsTable() {
  const [results, setResults] = useState([]);

  useEffect( ()=> 
     axios.get("http://localhost:5000/admin/Trainingtables")
			.then(res => { 
        setResults(Object.values(res.data));
        console.log("training worked ", results);
    }),[]);
   
    const handleDelete = useCallback( 
      (id)=> async(e)=>{
console.log(id);
      await axios.post("http://localhost:5000/admin/Trainingtables", {id})
        .then(res => console.log(res.data) ) },[],)  
  return (
    <div> <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Trainings
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Training id
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Training Name 
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Subscriptions
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Trainner
                </th>
              </tr>
            </thead>
            <tbody>
            { results.map(result =>
              (
                <> 
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {result['_id']}                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['trainingName']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['candidats'].length}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['formateur']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <button value={result['_id']} onClick={handleDelete(result['_id'])}> <FontAwesomeIcon icon={faTrash} > </FontAwesomeIcon>  </button>
                </td>
              </tr>
              </> ))}  
              
            </tbody>
          </table>
        </div>
      </div>
    </> </div>
  )
}
