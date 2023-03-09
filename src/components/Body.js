import React, { useEffect } from 'react'
import SideMenu from './SideMenu'
import VideoContainer from './MainContainer'
import ButtonList from './ButtonList'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Outlet } from 'react-router-dom'
const Body = () => {

  
  return (
   
        <div className='flex gap-4'>
           <SideMenu/>
           <Outlet/>
       
        </div>
   
  )
}

export default Body
