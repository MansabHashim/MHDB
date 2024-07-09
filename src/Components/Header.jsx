// import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex md:mx-[5%] p-3 rounded-full text-white md:gap-5 gap-2 text-md md:justify-start justify-between font-bold my-5 items-center">
        {/* <div> */}
            <Link className=" bg-[#f5c518] hover:text-black text-black text-2xl font-extrabold px-3 py-1 rounded-sm" to="/">MHDB</Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
        {/* </div> */}
    </div>
    
  )
}

export default Header