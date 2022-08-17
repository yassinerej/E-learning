import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Conversation from "./conversation"
import Message from "./message"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { io } from "socket.io-client";


export default function Chat(){

    let userId="6221dacb74f84cd8dcb1ea8e";
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const socket = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();

useEffect(()=> {
    socket.current=io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      });
},[])
useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
  
    useEffect(() => {
        socket.current.emit("addUser", userId);
        console.log('user added',userId);
    socket.current.on("getUsers", (users) => {
    console.log('user.socketId',users)
    });
  },[]);
 
useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("http://localhost:5000/chat" ,{params: {user: userId}});
            setConversations(res.data);
            console.log(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, []);
      useEffect(() => {
        const getMessages = async () => {
          try {
            const res = await axios.get("http://localhost:5000/message" ,{params:{conversationId:currentChat._id}});
            setMessages(res.data);
            console.log('getMessages:',res.data, currentChat._id)
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
      }, [currentChat]);
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
          sender: userId,
          text: newMessage,
          conversationId: currentChat
        };

        //send msg to socket
        const receiverId = currentChat.members.find(
            (member) => member !== userId
          );
          console.log('reciever id ', receiverId)
          socket.current.emit("sendMessage", {
            senderId: userId,
            receiverId,
            text: newMessage,
          });

        try {
            const res = await axios.post("http://localhost:5000/message", message);
            setMessages([...messages, res.data]);
            console.log('send msg ',message,'done')
            setNewMessage("");
          } catch (err) {
            console.log(err);
          }
    } 
    
      return (
        <> 
            <div className="relative min-h-screen flex flex-col bg-gray-50 border-2">
                <nav className="flex-shrink-0 bg-red-600"> 
                </nav>
                <div className="flex-grow w-full max-w-7xl mx-auto lg:flex"> 
                    <div className="flex-1 min-w-0 bg-white xl:flex">
                        <div className="border-b border-gray-200 xl:border-b-0 xl:flext-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50 "> 
                    
                            <div className="h-full lp-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0"> 
                                <div className="h-full relative"> 
                                    <div className="relative roundd-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus:within:ring-2 focus-within:ring-offset-2"> 
                                        <div className="flex-shrink-0"> 
                                            <img className="h-12 w-12 rounded-full" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>    
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <a href="#" className="focus:outline-none"> 
                                                <span className="absolute inset-0"/>
                                                <p className="text-sm font-bold text-red-600"> Vubcebt </p>
                                                <p className="text-sm text-gray-500 truncate"> Larketing manager</p> 
                                            </a>
                                        </div> 
                                    </div>
                                    <div className="mb-4">
                                        <div className="relative"> 
                                            <div className="absolute inset-y-0 letf-0 pl-3 flex items-center pointer-events-none"> 
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> 
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-2zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"/>
                                            </svg>
                                            </div> 
                                            <input name="search" className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 border-gray-100 rounded-full p-2 border"/>   
                                        </div>
                                    </div>
                                    {conversations.map(c=> (
                                        <div onClick={()=> setCurrentChat(c)}> 
                                       <Conversation conversation={c} currentUser={userId}/>
                                       </div> 
                                    ))}                      
                                </div>    
                            </div>
                            
                        </div>
                        <div className="flex-1 p:2 sm:pn-6 justify-between flex flex-col h-screen hidden xl:flex">
                                <div className="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3"> 
                                    <div className="flex items-center space-x-4"> 
                                        <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor pointer"/>
                                        <div className="flex flex-col leading-tigh">
                                            <div className="text-xl mt-1 flex items-center"> 
                                                <span className="text-gray-700 mr-3"> Kina Mayer</span>
                                                <span className="text-green-500"> 
                                                    <svg width={10} height={10}>
                                                        <circle cx={5} cy={5} r={5} fill="currentColor"/>
                                                    </svg>
                                                </span> 
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="flex items-center space-x-2"> 
                                    <button className="inline-flex items center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                        {/* recherche icon */}
                                    </button>
                                    </div>
                                </div>
                                {currentChat ?
                                <> 
                                 {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={userId===m.sender}/>
                    </div>
                  ))}
                                </>:<span> Open a conversation to start messaging </span>}
                                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 mb-16"> 
                                    <div className="relative flex">
                                        <span className="absolute inset-y-0 flex-tems-center"> 
                                        </span>
                                        <input 
                                        placeholder="Write something" 
                                        className="p-4  focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 ok-12 bg-gray-100 rounded-full py-3 border-gray-200"
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}/> 
                                        
                                        <button 
                                        className="ml-2 inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300"
                                        onClick={handleSubmit}>
                                            <FontAwesomeIcon icon={faPaperPlane}/>
                                        </button> 
                                    </div> 
                                </div>
                            </div> 
                    </div>
                </div>      
            </div> 
        </> 
    )
}