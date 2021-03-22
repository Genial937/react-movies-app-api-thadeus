import React from 'react'
import MovieControls from './MovieControls'
import {Card, Button} from 'react-bootstrap'

const MovieCard = ({movie, type}) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.poster_path ? (
                 <>
                 <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                 <div className="captions">
                 <p>{movie.title}</p>
                 <p><small>Released on: {movie.release_date}</small></p>
                 <h5>Overview</h5>
                 <p><small><i>{movie.overview}</i></small></p>
                 </div>
                 </>
            ) : (
                <div></div>
            )}

            <MovieControls type={type} movie={movie} />
        </div>
    )
}

export default MovieCard
