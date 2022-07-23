import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies=movies.map((movie,index)=>{
    return <div key={index}>
      <h3>Name:{movie.title}</h3>
      <p>Time:{movie.time}</p>
      Genres:<ul>
        {movie.genres.map((genre,index)=>{
          return<li key={index}>{genre}</li>
        })}
      </ul>
    </div>
  })
  return <div>
    <h1>Movies Page</h1>
    {renderMovies}
  </div>;
}

export default Movies;
