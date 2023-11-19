import React, { useContext, useEffect, useState } from 'react'
import '../Style/Movieinfo.css'
import * as Icons from 'react-bootstrap-icons';
import dayjs from 'dayjs';
import Noimage from '../images/No_Image.jpg';

const Movieinfo = (currentMovie, handleClose,) => {

    var currentMovies = currentMovie.currentMovie;
    console.log(currentMovies, 'curr');

    const api_keys = '1dcd25aed0c22d2e60da27a5257c935c';
    const [castDetail, setCastDetail] = useState([]);
    // var emptyBox = [];
    var movieId = currentMovies.id;

    var ApiCast = [];

    if (movieId !== null) {
        ApiCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_keys}`;
    } else {
        ApiCast = `https://api.themoviedb.org/3/movie/${575264}/credits?api_key=${api_keys}`;
    }
    const fetchApi = async () => {
        const response = await fetch(ApiCast);
        const resjson = await response.json();
        setCastDetail(resjson);
        // console.log(resjson, 'res');
    }

    useEffect(() => {
        setTimeout(() => {
            fetchApi()
        }, 100)
    }, [currentMovies])

    console.log(castDetail, 'castDetails');

    return (
        <>
            <div className="minfo">

                <div className="info-main">
                    <div className="movinfo">
                        <div className="sec1">
                            <div className="subsec">
                                <img src={currentMovies.poster_path ? `https://image.tmdb.org/t/p/w500/${currentMovies.poster_path}` : Noimage} alt="banner1" width='150px' height='200px' />
                                <div className="detail">
                                    <h2>Movie Name {currentMovies.title}</h2>
                                    <h4>Rating: {currentMovies.vote_average}</h4>
                                    <h5>{Math.floor(Math.random() * (150 - 100 + 1)) + 100} min {currentMovies.genre_ids}</h5>
                                    <h5>Release Date: {dayjs(currentMovies.release_Date).format("ddd MMM D YYYY")}</h5>
                                </div>
                            </div>
                            <div className="overview">
                                <h2>Overview</h2>
                                <h4>{currentMovies.overview}</h4>
                            </div>
                        </div>
                        <div className="sec2">
                            <img src={currentMovies.backdrop_path ? `https://image.tmdb.org/t/p/w500/${currentMovies.backdrop_path}` : Noimage} alt="banner2" />
                        </div>
                    </div>
                </div>
                <h2 style={{ color: 'white', marginLeft: '20px', fontSize: '2em' }}>Cast</h2>
                <div className="castinfo">

                    {/* {castDetail.cast.slice(0, 6).map((c) => {
                        return (
                            <div className="cast-img" key={c.id}>
                                <img src={c.profile_path ? `https://image.tmdb.org/t/p/w500/${c.profile_path}` : Noimage} alt="" />
                                <div className="castdet">
                                    {c.name}
                                </div>
                                <div className="castdet">
                                    Character: {c.character}
                                </div>
                            </div>
                        )
                    })} */}

                </div>
            </div>
        </>
    )
}

export default Movieinfo
