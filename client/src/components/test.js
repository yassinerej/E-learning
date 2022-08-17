import React, {useState, useHistory} from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { ToastContainer } from "react-toastify";

export default function Test() {
	let senderId="627e0fac0678c86ddc53645d"; 
	let receiverId ='6221dacb74f84cd8dcb1ea8e'

    const handleSubmit = async (e)=>{
		e.preventDefault();
		await axios.post("http://localhost:5000/conversation",{senderId,receiverId})
			.then(res => console.log(res.data) )
	}  
return (
<> 
<button onClick={handleSubmit}> click meee* </button>
</>
)

}