import React, { useState, useEffect,useCallback  } from 'react';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableDropdown from '../Dropdown/TableDropdown'

export default function CardTable() {
  const [results, setResults] = useState([]);

  useEffect( ()=> 
     axios.get("http://localhost:5000/admin/tables")
			.then(res => { console.log("working");
        setResults(Object.values(res.data));
        
    }),[]);
   
    const handleDelete = useCallback( 
      (id)=> async(e)=>{
console.log(id);
      await axios.post("http://localhost:5000/admin/tables", {id})
        .then(res => console.log(res.data) ) },[],)  
       
    return (
    <>
      <div className= "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded text-white"  >
       <div className="bg-sky-800 shadow-xl mt-8">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className= "font-semibold text-lg " >
                Candidates list
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Id             
               </th>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "  >
                  First name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Last name
                </th>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Role
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Email               
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " ></th>
              </tr>
            </thead>
            <tbody>
              { results.map(result =>
              (result['role']==="candidat"?
                <> 
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span className="ml-3 font-bold " >
                     {result['_id']}	 
                  </span>
                </th>  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['firstName']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i>                      
                  {result['lastName']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['role']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['email']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <button value={result['_id']} onClick={handleDelete(result['_id'])}> <FontAwesomeIcon icon={faTrash} > </FontAwesomeIcon>  </button>
                <TableDropdown id={result['_id']} />
                </td>
              </tr> 
              </> :""))}  
            </tbody>
          </table>
        </div>
     </div>
     {/* // Trainers List */}
     <div className=" bg-sky-800 shadow-xl mt-8"> 
        <div className="rounded-t mb-0 px-4 py-3 border-0 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className= "font-semibold text-lg " >
                Trainers list
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse shadow-xl">
            <thead>
              <tr>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Id             
               </th>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "  >
                  First name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Last name
                </th>
                <th className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Role
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Email               
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " ></th>
              </tr>
            </thead>
            <tbody>
              { results.map(result =>
              (result['role']==="formateur"?
                <> 
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span className="ml-3 font-bold " >
                     {result['_id']}	 
                  </span>
                </th>  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['firstName']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i>                      
                  {result['lastName']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['role']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {result['email']}	 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <button value={result['_id']} onClick={handleDelete(result['_id'])}> <FontAwesomeIcon icon={faTrash} > </FontAwesomeIcon>  </button>               </td>
              </tr> 
              </> :""))}  
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
}

