import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import * as Icons from 'react-bootstrap-icons'
import '../Style/Movies.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Movieinfo from './Movieinfo'
import { Containers } from './Containter'
import Noimage from '../images/No_Image.jpg'

const Movies = () => {
  const { inputValue } = useContext(Containers)
  const input = inputValue;


  const [movieData, setMovieData] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  const [displayMovie, setDisplayMovie] = useState(false);

  const shown = input ? 'search' : 'discover';

  const Api = `https://api.themoviedb.org/3/${shown}/movie`
  const Images = "https://image.tmdb.org/t/p/w500";


  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '1dcd25aed0c22d2e60da27a5257c935c',
        query: input
      }
    })
    const results = data.data.results
    setMovieData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      MovieCall()
    }, 100)
  }, [input])



  const moviedetail = (movie) => {
    setCurrentMovie(movie);
    setDisplayMovie(true);
  }

  const handleClose = () => {
    // setCurrentMovie([]);
    setDisplayMovie(false);
  }


  return (
    <>
      <div className="movieBlock" >
        {movieData.map((movies) => {
          return (
            <div className='movieBox' key={movies.id}>
              <img src={movies.poster_path ? `${Images}${movies.poster_path}` : Noimage } alt=' ' onClick={() => moviedetail(movies)} />
              <h3 id={movies.title.length > 28 ? 'smaller-Text' : ' '} >{movies.title}</h3>
              <h4>Rating {movies.vote_average.toFixed(1)}</h4>
            </div>
          )
        })}
      </div>

      <div className='movieCard-popUp' style={{
        visibility: displayMovie ? "visible" : "hidden",
        opacity: displayMovie ? "1" : "0",
      }}>
        <button className="sec3" onClick={handleClose} >
          <span style={{ fontSize: '1.4em', padding: '0 4px', fontWeight: 'bolder' }}>Back</span> <Icons.ArrowLeftCircleFill size={'2.1em'} style={{ backgroundColor: 'white', border: 'none', borderRadius: '50%' }} />
        </button>
        <Movieinfo currentMovie={currentMovie} handleClose={handleClose} />
      </div>

    </>
  )
}

export default Movies
