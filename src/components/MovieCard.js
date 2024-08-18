import React from 'react';
import { NavBar } from './NavBar'; 

const MovieDetail = ({ movie }) => {
  if (!movie) return <p>Loading...</p>; 

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
