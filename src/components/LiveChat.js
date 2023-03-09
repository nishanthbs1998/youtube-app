import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../utils/chatSlice'
import { randomNameGenerator } from '../utils/helper'
const LiveChat = () => {
    const chatArr=useSelector(store=>store.chat.chatArr)
    const [chatText,setChatText]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        const intr=setInterval(()=>{
            console.log("chatArr: ",chatArr)
            dispatch(addChat({
                name:randomNameGenerator(5),
                message:randomNameGenerator(20)
            }))
        },1000)
    return ()=>{
        clearInterval(intr)
    }
    }
    ,[])
  return (
    <div className='flex flex-col ml-10 w-full max-h-[500px]'>
    <div className=' p-2 min-h-[460px] flex flex-col-reverse rounded-lg border border-black   overflow-y-scroll'>
      {chatArr.map((chatMsg,ind)=>
      <div key={ind} className='flex items-center'>
        {chatMsg.name.length>0&&<img className='h-7 w-7 mr-2' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user image" />}
        <p className='py-2 mr-2 font-bold' >{chatMsg.name}</p>
        <p>{chatMsg.message}</p>
      </div>
      )}
     
    </div>
     <div className='flex py-1'>
        <input className='w-[85%] mr-2 border border-black px-1' placeholder='Your message...' type="text" value={chatText} onChange={(e)=>setChatText(e.target.value)} />
        <button className='bg-green-100 py-1 px-2' onClick={
            ()=>{
                dispatch(addChat({
                    name:"Nishanth BS",
                    message:chatText
                }))
                setChatText("")
            }
        }>Send</button>
      </div>
      </div>
  )
}

export default LiveChat
