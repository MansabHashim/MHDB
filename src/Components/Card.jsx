/* eslint-disable react/prop-types */
// import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'




const Card = ({movie}) => {

  const [Loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 1500)
},[])




return ( <>  

   
    {Loading ? 
     <div className=' inline-block transform duration-2 relative rounded overflow-hidden m-2 cursor-pointer min-w-[200px] z-0 border-red-600 '>
     <SkeletonTheme highlightColor="#222">
   
         <Skeleton height={200} width={300} count={3} duration={3} />
     </SkeletonTheme>
   </div>
    :

    <div id='parent' className=' relative  mx-2 bg--800 my-2 hover:scale-105 transition duration-200 ease-out hover:ease-in '>
        <Link className='flex' to={`/movie/${movie.id}`}>
        <div className=' bg--600 w-[300px]   '>
            <img className='  h-[200px] opacity-50 rounded-lg' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
            <div className='mx-2 yourchild absolute hidden top-20'>
                <h2 className='  text-lg font-bold'>{movie.title.slice(0, 24)}</h2>
               <div className='flex gap-5'>
               <h2>{movie.release_date}</h2>
               <h2>{movie.vote_average.toFixed(1)}</h2>
               </div>
                <p>{movie.overview.slice(0, 60)}...</p>
            </div>
        </div>
        </Link>
    </div> 
  }

</>
    
  )
}

export default Card