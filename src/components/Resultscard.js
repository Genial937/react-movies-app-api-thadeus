import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const Resultscard = ({movie}) => {
    const {addMovieToWatchList, watchlist, addMovieToWatched, watched} = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false; 
    const watchedDisabled = storedMovieWatched ? true : false;
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <div className="single-poster">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                    <p>Released on: {movie.release_date ? movie.release_date : "-"}</p>
                    <p>{movie.title}</p>
                    <p><i><small>{movie.overview}</small></i></p>
                    <div className="controls">
                        <button className="btn" disabled={watchlistDisabled} onClick ={() => addMovieToWatchList(movie)}>Add to Watchlist</button>
                    </div><br /> 
                    <div className="controls">
                        <button className="btn" disabled={watchedDisabled} onClick ={() => addMovieToWatched(movie)}>Add to Watched</button>
                    </div>
                    </div>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>
        </div>
    )
}

export default Resultscard
