import axios from "axios"
import { useEffect, useState } from "react"

export default function Conversation({conversation,currentUser}) {
    const [user, setUser] = useState();
    const [msgTime, setMsgTime] = useState();
    const [textMsg, setTextMsg] = useState();
  useEffect(() => {
    const userId = conversation.members.find((m) => m !== currentUser);
    const getUser = async () => {
      try {
        const res = await axios.post("http://localhost:5000/userinfo" ,{userId});
        setUser(res.data);
        console.log("info",res.data,userId);  
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

useEffect(()=> {
const getConvInfo= async()=> {
  try{
    const convId=conversation._id;
const res = await axios.post("http://localhost:5000/convinfo",{convId});
setTextMsg(res.data);
console.log('resf',res.data, convId);
  }
  catch(err){
    console.log(err);
  }
}
getConvInfo();
},[])

  return (
    <div>
        <div  className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200"> 
            <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
            </div>
            <div className="flex-1 min-w-0"> 
                <a href="#" className="focus:outline-none"> 
                    <div className="flex items-center jutify-between"> 
                        <p className="text-sm font-bold text-red-600"> 
                            {user?.firstName } {user?.lastName }
                        </p>
                        {/* <div className="text-gray-400 text-xs"> {textMsg.createdAt.slice(11,16)} </div> */}
                    </div>
                    <div className="flex items-center justify-between">
                        {/* <p className="text-sm text-gray-500 truncate ">{textMsg.text} </p> */}
                        <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0"> 
                            2
                        </div>  
                    </div> 
                </a> 
            </div>
        </div>
    </div>
  )
}

