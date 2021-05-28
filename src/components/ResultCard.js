import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';


const ResultCard = (movie) => { 
    const {addMovieToWatchlist,addMovieToWatched,watchlist,watched} = useContext(GlobalContext);
    
    let storedMovie = watchlist.find(o => o.movie.id === movie.movie.id);
    let storedMovieWatched = watched.find(o =>o.movie.id === movie.movie.id);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true:false;
    const watchedDisabled = storedMovieWatched ? true :false;
    return ( 
      <div className="result-card">
          <div className="poster-wrapper">
              {movie.movie.poster_path ? (
                  <Link to="/watched">
                  <img src={`https://image.tmdb.org/t/p/w1280${movie.movie.poster_path}`} alt={`${movie.title} Poster`}/>
                  </Link>
              ):(
                  <div className="filler-poster">
                  </div>
              )}
          </div>
          <div className="info">
              <div className="header">
              <Link to="/watched">
                  <h3 className="title">
                      {movie.movie.title}
                  </h3>
                  </Link>
                  <div style={{ width: 70, height: 70, marginTop:10,marginBottom:10}}>
                  <CircularProgressbar value={movie.movie.vote_average*10} text={`%${movie.movie.vote_average*10}`} styles={buildStyles({pathColor: "#f8c544",textColor: "black",trailColor:"gray"})}/>
                  </div>
                  <div className="controls">
                      <button className="btn" disabled={watchlistDisabled} onClick={()=>addMovieToWatchlist(movie)}>Add Watchlist</button>
                      <button className="btn" disabled={watchedDisabled} onClick={()=>addMovieToWatched(movie)}>Add Watched</button>
                  </div>
              </div>
          </div>
      </div>
     );
}
 
export default ResultCard;