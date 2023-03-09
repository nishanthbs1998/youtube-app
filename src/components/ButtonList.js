import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const titles=['All','News','Music','News','Music','Live','Test Drives','Nissan','Royal Enfield','Gaming','Mixes','Comedy','Drama','Action','UFC','Cricket']
  return (
    <div className='flex gap-4 ml-2 mt-2 '>
      {titles.map((title,ind)=>(
        <Button key={ind} title={title}/>
      ))}
    </div>
  )
}

export default ButtonList
