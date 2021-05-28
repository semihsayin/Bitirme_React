import { useState } from 'react';
import {Link} from 'react-router-dom';
import MovieContols from './MovieControls';

const PopulerMovieCard = ({movie,type}) => {
    
    return ( 
        <div className="movie-card">
            <div className="overlay">
            </div>
            {movie.poster_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
              ):(
                  <div className="filler-poster">
                  </div>
              )}
            <MovieContols type={type} movie={movie} > </MovieContols>
            <h3 className="title">{movie.title}</h3>
        </div>
     );
}
 
export default PopulerMovieCard;

