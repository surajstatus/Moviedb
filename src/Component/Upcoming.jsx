import React, { useEffect, useState } from 'react'
import '../Style/Movies.css'

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([])


  const Api_key = '1dcd25aed0c22d2e60da27a5257c935c';
  const Api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`;
  const Images = "https://image.tmdb.org/t/p/w500";

  const MovieCall = () => {
    fetch(Api)
      .then((res) => res.json())
      .then(data => {
        console.log(data.results);
        setUpcoming(data.results);
      })
  }
  useEffect(() => {
    MovieCall();
  }, []);
  return (
    <>
      <div className="movieBlock">
        {upcoming.map((movies) => {
          return (
            <div className='movieBox' key={movies.id}>
              <img src={movies.poster_path ? `${Images}${movies.poster_path}` : 'NoImage'} alt=' ' />
              <h3 id={movies.title.length > 28 ? 'smaller-Text' : ' '} >{movies.title}</h3>
              <h4>Rating {movies.vote_average.toFixed(1)}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Upcoming
