import React from 'react'

const SearchSuggestions = ({resultsArray}) => {


  return (
    <div className='border absolute shadow-lg bg-white border-gray-300 z-10 w-[35.5%] top-12 rounded-lg p-3 m-1'>
      {resultsArray?.map((item,ind)=>{
       return <li key={ind} className='list-none mb-2 w-full font-bold'>{item}</li> 
      })}
    </div>
  )
}

export default SearchSuggestions
