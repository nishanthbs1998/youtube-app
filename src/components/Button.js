import React from 'react'

const Button = ({title}) => {
  return (
    <div className='bg-gray-300 py-1 px-2 rounded-lg'>
     <button>{title}</button> 
    </div>
  )
}

export default Button
