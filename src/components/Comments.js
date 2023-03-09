import React,{useState} from 'react'


/*
* [a:[x,y:[1,2,3],z],b:[n,m,l],c,d]
*
*
*
*
*/ 



const Comments = ({commentsData}) => {

  return(
    <>
      {
        commentsData.map(comment=>{
          return <>
          <div className='flex gap-1.5 p-2 '>
            <div>
            <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user icon" />
          </div>
          <div>
                      <p className='font-bold'>{comment.name}</p>
          <p>{comment.comment}</p>
          </div>
          </div>
          
          <div className='ml-5 border-l-4 border-gray-400'>
            <Comments commentsData={comment.replies}/>
          </div>
          
          </>
        })
      }
    </>
  )
   
  
}

export default Comments
