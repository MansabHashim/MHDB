// import React from 'react'
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import MovieList from "../../Components/MovieLlist";
import TopRatedMovies from "../Top_Rated/TopRatedMovies"
import UpcomingMovies from "../Upcoming/UpcomingMovies"

const Home = () => {

    const api_key = "eae72c634b24b667d684e951e8f90281"
    const [PopularMovie, setPopularMovie] = useState([])
  
    const fetchPopular = async()=>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      const data = await res.json()
      setPopularMovie(data.results);
      console.log(data.results);
    }
  
    useEffect(()=>{
      fetchPopular()
    }, [])
  

  return (
    <>
    <div className="poster">
        <Carousel
        showThumbs={true}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={true}
        >
            {PopularMovie.map((movie, index)=>(   
                // <img src={movie} alt="" />
                <Link key={index} className="relative" to={`/movie/${movie.id}`}>
                <div  className="z-[1] w-full items-start opacity-30  md:h-[70vh] flex justify-center  mb-10">
                    <img className="  bg-pink-400 shadow-[5px 5px 5px 5px ] shadow-white rounded" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
                </div>
                <div className="md:w-[70vw] w-[70vw] flex flex-col md:gap-5  absolute top-[20vh] md:[25vh]  lg:top-[30vh] text-start ml-[5vw]">
                    <h1 className="  text-white lg:text-7xl md:text-5xl text-2xl font-bold ">{movie ? movie.title : ""}</h1>
                   <div className="flex gap-5 items-center object-center"> <h1 className=" text-white text-xl font-medium ">{movie ? movie.release_date : ""}</h1>
                   <h1 className=" text-white md:text-2xl text-lg font-bold ">{movie ? movie.vote_average.toFixed(1) : ""} <FontAwesomeIcon className=" text-yellow-400 text-lg items-center pb-[4px]  " icon={faStar} /></h1></div>
                    <h1 className="  text-white md:text-lg hidden text-sm  md:flex ">{movie ? movie.overview : ""}    </h1>
                </div>
                </Link>
                
                  ))}
        </Carousel>
    </div>
    <MovieList/>
    <TopRatedMovies/>
    <UpcomingMovies/>
    </>
  )
}

export default Home