import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu, toggleMenu } from '../utils/appSlice'
import SideMenu from './SideMenu'
import Comments from './Comments'
import { commentsData } from '../constants'
import LiveChat from './LiveChat'
const WatchPage = () => {
    const [searchParams]=useSearchParams()
 
    
    
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    // <div className='flex m-2'>
    //   <SideMenu/>
    

    <div className='p-2 m-2 ml-10 w-full' >
      <div className='flex'>
        <div>
          <iframe
       // className="rounded-2xl"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      
        </div>
        
        <LiveChat/>
      
      </div>
      
      <h1 className='font-bold text-xl my-2'>Comments</h1>
      <Comments commentsData={commentsData}/>
    </div>
    // </div>
  )
}

export default WatchPage
