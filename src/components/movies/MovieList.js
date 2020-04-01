import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from "./MovieCard";

function MovieList() {
   
    let [movies, setMovies] = useState([]);

    useEffect(() => {
       getMovies();
    }, []);

    async function getMovies() {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies');
        setMovies(res.data.results);
    }

    return (
        <div className="container">
            <div className="row">
                { movies.map(movie => <MovieCard film={ movie } key={ movie._id } />) }

                {/* { movies.length ? movies.map(movie => <MovieCard film={ movie } />) : 'Loading ...'}              */}
            </div>
        </div>
    );
}

export default MovieList;