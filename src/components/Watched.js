import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'


const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div className="movie-page">
           <div className="container">
             <div className="header">
               <h1 className="heading">Watched Movies</h1>
             </div>
             {watched.length > 0 ? (
               <div className="movie-grid">
               {watched.map(movie => (
                 <MovieCard movie={movie} type="watched"/>
               ))}
             </div>
             ): (
               <h5>No Movies watched. <Link to="/add" class="btn">Add Some!</Link></h5>
             )}
           </div>
        </div>
    )
}

export default Watched
