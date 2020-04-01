import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from './MovieList';
import Rating from './Rating'

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    


    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
    }
    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);

    if(movie) {
        console.log(movie);
        return (
            <>
               
                <h1 className="text-white bg-dark"  > 
                        {movie.Title } 
                        ({movie.Year }) 
                    <div className='d-flex justify-content-end'> 
                           <i className =".icon.icon-star">
                               Nota:{movie.imdbRating}/10
                           </i> 
                    </div>    
                </h1>
                
            
                <div >
                            Time: {movie.Runtime} <br/>
                            Genre : {movie.Genre}

                </div>
                
                <img  src = {movie.Poster} alt="Movie Poster"/> 
                <p> 
                    {movie.Plot} <br />
                </p>

                <p>
                            
                    Director : {movie.Director} <br />
                    Writers : {movie.Writer} <br />
                    Actors : {movie.Actors} 
                </p>
            
              <Rating />
         
        </>
         );
    } else{
      return <h1>Loading...</h1>;
      }
    
}

export default MovieDetails;