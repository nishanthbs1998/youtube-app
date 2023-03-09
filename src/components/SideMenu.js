import React from 'react'
import { useSelector } from 'react-redux'
const SideMenu = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  return !isMenuOpen?null:(
    <div className=' shadow-lg py-2 px-5 mt-1 '>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <hr className='my-2' />
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <hr className='my-2' />
      </ul>
    </div>
  )
}

export default SideMenu
