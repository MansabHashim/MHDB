// import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [CurrentMovieDetails, setCurrentMovieDetails] = useState([]);
  const { id } = useParams();

  const { title, backdrop_path, original_title, tagline, overview, vote_count, homepage, release_date, vote_average, runtime,  imdb_id } =
    CurrentMovieDetails;
  console.log(CurrentMovieDetails);

  const api_key = "eae72c634b24b667d684e951e8f90281";

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
      .then((res) => res.json())
      .then((data) => setCurrentMovieDetails(data));
  };
  return (
    <div >
      <div className=" h-[full] md:mb-[5%]">
        <div className="z-[1] md:mb-52  items-start lg:opacity-15 overflow-hidden md:h-[70vh] flex justify-center ">
          <img
            className=" w-[90vw] md:w-5/5  md:h-[80vh]  bg-pink-400 shadow-[5px 5px 5px 5px ] shadow-white rounded"
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={original_title}
          />
        </div>
        <div className="md:flex mx-[5%] md:absolute md:top-[60%] md:mb-52 gap-5">
          <div className=" w-full lg:block hidden">
           
            <img
              className="  left-0 shadow-slate-50 shadow-lg h-[500px] w-[600px] overflow-hidden opacity-90 rounded-lg"
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt={title}
            />
          </div>
          <div className="flex  gap-5 flex-col bg-ed-300 rounded-lg mb-5 py-5">
            <div className=" md:w-[60vw] flex  flex-col gap-5 bg-gray-700 p-5 rounded-md">
              <h1 className="text-4xl font-extrabold">{title}</h1>
              <p className=" text-lg font-medium">{tagline}</p>
              <div className="flex gap-5"><p className=" text-lg font-medium">{vote_average}⭐</p> <p className=" text-lg font-medium">({vote_count}) Votes</p></div>
              <p className=" text-lg font-medium">{runtime} mins</p>
              <p className=" text-lg font-medium">Release Data: {release_date}</p>
            </div>
            <div className=" md:w-5/6">
              
              <h1 className="font-bold mb-2 text-4xl">Overview</h1>
              <p >{overview}</p>
            </div>
            <div className=" mx-[%] p-5 items-center justify-  gap-5 flex">
          <button className=" bg-yellow-400 px-5 py-3 text-black text-lg font-bold rounded-xl"><a className=" hover:text-white" target="blank" href={homepage}>Movie Page</a></button>
          <button className=" bg-yellow-400 px-5 py-3 text-black text-lg font-bold rounded-xl"><a className=" hover:text-white" target="blank" href={`https://www.imdb.com/title/${imdb_id}/`}>Movie Page</a></button>
        </div>
      <div className=" mx-5">Made With ❤️ By <span className=" text-yellow-300 font-bold">Mansab Hashim</span></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovieDetails;
