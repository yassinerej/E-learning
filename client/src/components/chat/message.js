
export default function Message({ message,own}) {
  return (
      <>
       <div> 
      {own===false ? 
      <> 
        <div className="">
            <div id="message" className="flex flex-col space-y-4 p-3 overflow-y-auto scrikkbar-thumb-blue scrikkbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <div className="chat-message">
                        <div className="flex items-end"> 
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div> 
                                    <span className="ox-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600"> 
                                        {message.text}
                                    </span>
                                </div>    
                            </div> 
                            <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className="w-6 h-6 rounded-full order-1"/>     
                        </div>
                    </div> 
                </div>
            </div> 
                </>:  
            <div className="">
                <div id="message" className="flex flex-col space-y-4 p-3 overflow-y-auto scrikkbar-thumb-blue scrikkbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <div className="chat-message">
                        <div className="flex items-end justify-end"> 
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div> 
                                    <span className="ox-4 p-2 rounded-lg inline-block rounded-bl-none bg-red-500 text-white"> 
                                        {message.text}
                                    </span>
                                </div>    
                            </div> 
                            <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className="w-6 h-6 rounded-full order-1"/>     
                        </div>
                    </div> 
                </div>
            </div> }
        </div>
    </>
     );
}