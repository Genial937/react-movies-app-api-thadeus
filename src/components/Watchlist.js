import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom'


const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  console.log(watchlist);
    return (
        <div className="movie-page">
           <div className="container">
             <div className="header">
               <h1 className="heading">My Watch List</h1>
             </div>
             {watchlist.length > 0 ? (
               <div className="movie-container">
                 <div className="movie-grid">
               {watchlist.map(movie => (
                 <MovieCard movie={movie} type="watchlist"/>
               ))}
             </div>
               </div>
             ): (
               <h5>No Movies in your watchlist. <Link to="/add" class="btn">Add Some!</Link></h5>
             )}
           </div>
        </div>
    )
}

export default Watchlist
