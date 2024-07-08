import{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

const MovieList = () => {
  const [MoviesData, setMoviesData] = useState([]);
  const { type } = useParams();
  const api_key = "eae72c634b24b667d684e951e8f90281";

  const getData = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${api_key}`);
      const data = await res.json();
      setMoviesData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  console.log(MoviesData);

  return (
    <div className='mx-[8%]'>
      <h2 className='text-4xl font-extrabold'>{type ? type.toUpperCase() : "Popular"}</h2>
      <div className='flex flex-wrap justify-center my-5'>
        {MoviesData.map((movList, index) => (
          <Card key={index} movie={movList} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
