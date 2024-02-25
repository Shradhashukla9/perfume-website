import React from 'react'
import "../index.css"
const Shimmer = () => {
  return ( <>
    <div className='shimmer'>
      {
        Array(10).fill("")
        .map((e, index)=>(
            <div  key ={index} className='shimmer-tab'>
           
           </div>
           
        ))
      }
    
    

    </div>
    </>
  )
}

export default Shimmer
