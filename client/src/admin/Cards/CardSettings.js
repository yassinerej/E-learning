import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function CardSettings() {
  const [result,setResult]=useState({}); //slice(0,10)
  useEffect(()=> 
  axios.get("http://localhost:5000/admin/settings")
			.then(res => {
        setResult(res.data);
        console.log(res.data);
          setbirthPlace(result.birthPlace);    
          setPhone(result.tel);  
          setCountry(result.country);
          setfirstName(result.firstName);  
          setlastName(result.lastName);   
          setEmail(result.email);  
      })
      ,[])


      //UPDATING USER DATA 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthPlace, setbirthPlace] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setbirthDate] = useState("");
    
  const getFirstName = (e) => {
      setfirstName(e.target.value);
  }
  const getLastName = (e) => {
      setlastName(e.target.value);
  }
  const getEmail = (e) => {
      setEmail(e.target.value);
  }
  const getPhone = (e) => {
    setPhone(e.target.value);
  }
  const getCountry = (e) => {
    setCountry(e.target.value);
  }
  const getbirthPlace = (e) => {
    setbirthPlace(e.target.value);
  }
  const handleUpdate =async(e) => {
        await axios.post("http://localhost:5000/admin/settings",{lastName,firstName,email,phone,country,birthPlace}
            ).then(res => {console.log("data sent succesfully");
          //toast.success(res.data); 
            }).then(window.location.reload(false))
       }
       

  return (
    <>  
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-sky-900 mb-0 border-b-2 border-blueGray-300 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className=" text-xl font-bold">My account</h6>
            <button
              className="bg-white text-sky-900 active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={handleUpdate}>
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0  ">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Admin Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password" >
                    first Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.firstName} onChange={getFirstName}/>
                 </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Last name 
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.lastName} onChange={getLastName}/>            
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password" >
                    Birth date 
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.birthDate} onChange={getbirthPlace}/>                                     
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.country}onChange={getCountry}/>                                     
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">        
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Phone
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.tel} onChange={getPhone}/>                                     
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    email
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.email} onChange={getEmail} />                                   
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password" >
                    social Network
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={result.socialNetwork} />                                     
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />         
          </form>
        </div>
      </div>
    </>
  );
}
