import {useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import PopulerMovieCard from './PopulerMovieCard';

const PopularMovies = () => {

    const [popularMovies,setPopularMovies] = useState("");

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=92714d0acc1e4edc3f60d3c4b08b3427&language=tr`)
        .then(res =>res.json())
        .then((data)=>{
            if(!data.errors){
            console.log(data);
            setPopularMovies(data.results);   
            }
            else{
                setPopularMovies([]);
            }
        });
    });
    return ( 
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Trend Filmler</h1>
                </div>
                {popularMovies.length > 0 ?(
                    <div className="movie-grid">
                    {popularMovies.map((movie) => (
                        <PopulerMovieCard movie={movie} type="popular"/>
                    ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No Movies in your list</h2>
                )}
            </div>
        </div>
     );
}
 
export default PopularMovies;