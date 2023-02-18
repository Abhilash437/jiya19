import React from 'react'
import {data} from './Data';


const Card = () => {
  return (
    <>
      {
      data.map((song,i)=>{
        return(
          <a href={song.link} className="w-full h-full flex  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md shadow-black">
          <img className="object-cover w-32 h-32 md:w-48 md:h-32 rounded-t-lg rounded-lg" src={song.image} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{song.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Song <p className='text-lg font-bold inline'>.</p>{' '}{song.author}</p>
          </div>
         </a> 
        )
      })
    }
    </>
  )
}

export default Card